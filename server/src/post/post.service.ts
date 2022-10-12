import { Injectable, CacheTTL, CACHE_MANAGER, Inject } from '@nestjs/common';
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

  // 3시간 마다
  @Cron('0 */3 * * *')
  setCachedRankedPost(){
    const rankedPost = this.extractRankedPost();
    this.cacheManager.set(this.CACHE_KEY, rankedPost);
  }

  // 랜덤하게 인기 포스트를 추출
  extractRankedPost(): PostItem[] {
    const rankedPost: PostItem[] = [];
    this.domain.forEach((item) => {
      const ran = Math.floor(Math.random() * 72);
      const postId: PostId = `${item}_${ran}`;
      rankedPost.push(this.getPostById(postId));
    })
    rankedPost.push(this.getPostById('culture_42'));

    return rankedPost;
  }

  getRankedPost(): Promise<PostItem[]> {
    const result = this.cacheManager.get<PostItem[]>(this.CACHE_KEY);
    if (result !== undefined) {
      return result as Promise<PostItem[]>;
    }

    const rankedPost = this.extractRankedPost();
    this.cacheManager.set(this.CACHE_KEY, rankedPost);

    return new Promise((res) => {
      setTimeout(() => {
        res(rankedPost);
      }, 1000);
    })
  }
}
