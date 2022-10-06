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
    const res = await this.cacheManager.get("hub_01");
    return res;
  }

  async setHome() {
    await this.cacheManager.set("hub_01", "설마 스트링이 아니라서??");
    return "성공했어요 ㅜㅜㅜㅜ";
  }

  getDataByCategory(category: NavName): PostItem[] {
    return mockData[category];
  }
}
