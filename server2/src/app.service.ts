import { Injectable } from '@nestjs/common';
import { ssrApp } from '../../client/src/main';
import { renderToString } from 'vue/server-renderer';
import { createSSRApp } from 'vue';

@Injectable()
export class AppService {
  getHello(): string {
    const app = createSSRApp({
      data: () => ({ count: 1 }),
      template: `<button @click="count++">{{ count }}</button>`,
    });

    renderToString(ssrApp).then((html) => html);
    return '서버 렌더링 해라...';
  }
}
