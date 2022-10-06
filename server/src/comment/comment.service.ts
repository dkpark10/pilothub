import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class CommentService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) { }

  async getComment() {
    await this.cacheManager.get('culture_01');
    return '댓글 서비스';
  }

  async setComment(key:string, data: any) {
    console.log('들어오지??');
    await this.cacheManager.set(key, data);
    return true;
  }
}
