import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';

interface Comment {
  title: string;
  description: string;
}

@Injectable()
export class CommentService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) { }

  async getComment() {
    return await this.cacheManager.get('hub1');
  }

  async setComment(key: string, data: any) {
    await this.cacheManager.set<Comment>(key, data);
    return true;
  }
}
