import { throttle } from "@/utils/index";

export const useScroll = (callback: () => void) => {
  const onScrollEventHandler = throttle((e: Event) => {
    const { innerHeight } = window;
    const {
      documentElement: { scrollTop, offsetHeight },
    } = document;

    console.log("실행은 되는거지 친구??", innerHeight, scrollTop, offsetHeight);

    if (innerHeight + scrollTop >= offsetHeight - 10) {
      callback();
    }
  }, 250);

  document.addEventListener("scroll", onScrollEventHandler);
};
