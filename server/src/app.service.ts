import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { NavName, PostItem } from 'custom-type';
import { mockData } from '@/assets/hubmock/index';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getServerSideRender() {
    return `
      <!doctype html>
        <html lang="">
          <head>
          <meta charset="utf-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <link rel="icon" href="/favicon.ico">
          <title>hub3</title>
          <script defer="defer" src="/js/app.b483af3e.js">
          </script>
          <link href="/css/app.ece5ea41.css" rel="stylesheet">
        </head>
        <body>
          <noscript>
            <strong>We re sorry but hub3 doesnt work properly without JavaScript enabled. Please enable it to continue.
          </strong>
          </noscript>
          <div id="app"></div>
        </body>
      </html>`;
  }

  async setHome() {
    await this.cacheManager.set('hub1', {
      title: '흠...',
      description: '흐흐흐으으으으123123123',
    });
    return '성공했어요 ㅜㅜㅜㅜ';
  }

  getDataByCategory(category: NavName): PostItem[] {
    return mockData[category];
  }
}
