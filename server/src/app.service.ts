import { Inject, Injectable, CACHE_MANAGER } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { NavName, PostItem } from 'custom-type';
import { mockData } from '@/assets/hubmock/index';
import ssrManifest from '../ssr/server/ssr-manifest.json';

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
          <div id="app">
            얘 대체 왜이러는지 아시는분...
          </div>
        </body>
      </html>`;
  }

  getDataByCategory(category: NavName): Promise<PostItem[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(mockData[category]);
      }, 1000);
    })
  }
}
