export const doSthInSec = (second = 5): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, second * 1000);
  });
};
