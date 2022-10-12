import { throttle } from "@/utils/index";

export const useScroll = (callback: () => void) => {
  const onScrollEventHandler = () => {
    const { innerHeight } = window;
    const {
      documentElement: { scrollTop, offsetHeight },
    } = document;

    if (innerHeight + scrollTop >= offsetHeight) {
      callback();
    }
  };

  document.addEventListener("scroll", onScrollEventHandler);
};
