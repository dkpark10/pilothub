/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* eslint-disable */
declare module 'third-party' {
  export interface CustomPost {
    title: string;
    author: string;
    category: string;
  }
}

declare module 'carousel-type' {
  export interface BreakPoints {
    [width: number]: {
      itemsToShow: number;
      snapAlign: string;
    }
  }
}
