import { Injectable } from '@nestjs/common';
import { NavName, PostItem } from 'custom-type';
import { mockData } from '@/assets/hubmock/index';
import { join } from 'path';
import { renderToString } from 'vue/server-renderer';
import { readFile } from 'fs';

@Injectable()
export class AppService {
  constructor() {}

  async getServerSideRender(): Promise<string> {
    const manifest = require('../ssr/server/ssr-manifest.json');
    const appPath = join(__dirname, '../ssr', 'server', manifest['app.js']);
    const createApp = require(appPath).default;

    const { app, router } = await createApp();

    router.push('/');
    await router.isReady();
    let appContent = await renderToString(app);

    return new Promise((res) => {
      readFile(
        join(__dirname, '../ssr/client/index.html'),
        'utf8',
        (err, html) => {
          if (err) {
            throw err;
          }

          appContent = `<div id="app">${appContent}</div>`;
          html = html
            .toString()
            .replace('<div id="app"></div>', `${appContent}`);
          res(html);
        },
      );
    });
  }

  getDataByCategory(category: NavName): Promise<PostItem[]> {
    return new Promise((res) => {
      setTimeout(() => {
        res(mockData[category]);
      }, 200);
    });
  }
}
