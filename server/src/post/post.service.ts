import { Injectable, CACHE_MANAGER, Inject } from '@nestjs/common';
import { mockData } from '@/assets/hubmock/index';
import { PostId, NavName, PostItem } from 'custom-type';
import { Cache } from 'cache-manager';
import { Cron } from '@nestjs/schedule';

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
  private readonly CACHE_KEY = 'RANKED_POST_KEY';

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {
    this.setCachedRankedPost();
  }

  getPostById(postid: PostId): PostItem {
    const category = postid.split('_')[0] as NavName;
    return mockData[category].find((postItem) => postItem.postId === postid) as PostItem;
  }

  /**
   * @description
   * 인기허브글은 3시간마다 랜덤으로 추출하여 캐시 설정
   */
  @Cron('0 */3 * * *')
  setCachedRankedPost(){
    const rankedPost = this.extractRankedPost();
    this.cacheManager.set(this.CACHE_KEY, rankedPost);
  }

  extractRankedPost(): PostItem[] {
    const rankedPost: PostItem[] = [];
    this.domain.forEach((item) => {
      const random = Math.floor(Math.random() * 72);
      const postId: PostId = `${item}_${random}`;
      rankedPost.push(this.getPostById(postId));
    })
    rankedPost.push(this.getPostById('culture_42'));

    return rankedPost;
  }

  async getRankedPost(): Promise<PostItem[]> {
    const result = await this.cacheManager.get<PostItem[]>(this.CACHE_KEY);
    if (result !== undefined) {
      console.log('인기 허브 글 캐시 데이터 반환');
      return result;
    }

    const rankedPost = this.extractRankedPost();
    this.cacheManager.set(this.CACHE_KEY, rankedPost);

    return new Promise((res) => {
      setTimeout(() => {
        res(rankedPost);
      }, 100);
    })
  }
}
