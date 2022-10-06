// eslint-disable-next-line
export const debounce = (callback: (args?: any) => void, delay: number) => {
  let timer: number | undefined = undefined;
  // eslint-disable-next-line
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args);
    }, delay);
  };
};

// eslint-disable-next-line
export const throttle = (callback: (args?: any) => void, delay: number) => {
  let waiting = false;
  // eslint-disable-next-line
  return (...args: any) => {
    if (!waiting) {
      callback(args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, delay);
    }
  };
};
