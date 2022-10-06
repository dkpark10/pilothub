import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { NavName, PostItem } from 'custom-type';
import { mockData } from '@/assets/hubmock/index';

@Injectable()
export class AppService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) { }

  async getHome() {
    const res = await this.cacheManager.get("hub1");
    return res;
  }

  async setHome() {
    await this.cacheManager.set("hub1", {
      title: "흠...",
      description: "흐흐흐으으으으123123123",
    });
    return "성공했어요 ㅜㅜㅜㅜ";
  }

  getDataByCategory(category: NavName): PostItem[] {
    return mockData[category];
  }
}
