import { throttle } from "@/utils/index";

export const useScroll = (callback: () => void) => {
  const onScrollEventHandler = throttle((e: Event) => {
    const { innerHeight } = window;
    const {
      documentElement: { scrollTop, offsetHeight },
    } = document;

    if (innerHeight + scrollTop >= offsetHeight - 10) {
      callback();
    }
  }, 120);

  document.addEventListener("scroll", onScrollEventHandler);
};
