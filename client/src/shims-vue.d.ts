/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/* eslint-disable */
declare module 'custom-type' {
  export interface CustomPost {
    title: string;
    author: string;
    category: string;
  }
  export type Unit = "px" | "%" | "vw" | "vh" | "vmin" | "vmax";
  export type SizeUnit = `${number}${Unit}`;
}

declare module 'carousel-type' {
  export interface BreakPoints {
    [width: number]: {
      itemsToShow: number;
      snapAlign: string;
    }
  }
}
