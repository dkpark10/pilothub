export const useIntersection = (
  callback: () => void,
  option?: IntersectionObserverInit
): IntersectionObserver => {
  const intersectionHandler = (
    [entry]: IntersectionObserverEntry[],
    intersec: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      intersec.unobserve(entry.target);
      callback();
      intersec.observe(entry.target);
    }
  };

  return new IntersectionObserver(intersectionHandler, option);
};
