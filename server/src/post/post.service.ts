import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { mockData } from '@/assets/hubmock/index';
import { PostId, NavName, PostItem } from 'custom-type';
import { Cache } from 'cache-manager';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class PostService {
  private readonly domain: Exclude<NavName, ''>[] = [
    'life',
    'food',
    'trip',
    'culture',
    'tech',
    'biz',
    'issue',
    'entertainment',
  ];
  private readonly RANKED_CACHE_KEY = 'RANKED_POST_KEY';
  private readonly MAIN_CACHE_KEY = 'MAIN_POST_KEY';

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    this.setCachedMainPost();
    this.setCachedRankedPost();
  }

  getPostById(postid: PostId): PostItem {
    const category = postid.split('_')[0] as NavName;
    return mockData[category].find(
      (postItem) => postItem.postId === postid,
    ) as PostItem;
  }

  getChannelPost(): PostItem[] {
    const result: PostItem[] = [];

    for (let day = 0; day < 3; day += 1) {
      const idx = (new Date().getDay() + day) % 8;
      const category = this.domain[idx];   
      result.push(...mockData[category].slice(0, 4));
    }

    return result;
  }

  /**
   * @description
   * 메인허브글은 12시간마다 랜덤으로 추출하여 캐시 설정
   */
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async setCachedMainPost() {
    try {
      const mainPosts = this.extracRandomPost(6);
      await this.cacheManager.set(this.MAIN_CACHE_KEY, mainPosts, {
        ttl: 10800,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getMainPost() {
    const result = await this.cacheManager.get<PostItem[]>(this.MAIN_CACHE_KEY);
    if (result !== undefined) {
      console.log('메인 허브 글 캐시 데이터 반환');
      return result;
    }

    const mainPosts = this.extracRandomPost(6);
    await this.cacheManager.set(this.MAIN_CACHE_KEY, mainPosts, {});

    return new Promise((res) => {
      setTimeout(() => {
        res(mainPosts);
      }, 100);
    });
  }

  /**
   * @description
   * 인기허브글은 30분마다 랜덤으로 추출하여 캐시 설정
   */
  @Cron(CronExpression.EVERY_30_MINUTES)
  async setCachedRankedPost() {
    try {
      const rankedPost = this.extracRandomPost();
      await this.cacheManager.set(this.RANKED_CACHE_KEY, rankedPost, {
        ttl: 10800,
      });
    } catch (e) {
      console.error(e);
    }
  }

  async getRankedPost(): Promise<PostItem[]> {
    const result = await this.cacheManager.get<PostItem[]>(
      this.RANKED_CACHE_KEY,
    );
    if (result !== undefined) {
      console.log('인기 허브 글 캐시 데이터 반환');
      return result;
    }

    const rankedPosts = this.extracRandomPost();
    await this.cacheManager.set(this.RANKED_CACHE_KEY, rankedPosts);

    return new Promise((res) => {
      setTimeout(() => {
        res(rankedPosts);
      }, 100);
    });
  }

  extracRandomPost(length = 9): PostItem[] {
    const randomPosts: PostItem[] = [];
    this.domain.forEach((item) => {
      const random = Math.floor(Math.random() * 72);
      const postId: PostId = `${item}_${random}`;
      randomPosts.push(this.getPostById(postId));
    });
    randomPosts.push(this.getPostById('culture_42'));

    return randomPosts.slice(0, length);
  }

  getSearchResult(keyword: string): PostItem[] {
    const results: PostItem[] = [];

    Object.keys(mockData).forEach((hubName: string) => {
      mockData[hubName as NavName].map((post) => {
        if (post.title.indexOf(keyword) === 0) {
          results.push(post);
        }
      });
    });
    return results;
  }

  async setCacheTest() {
    const result = await this.cacheManager.set('silver', 123, { ttl: 12 });
    return result;
  }
}
