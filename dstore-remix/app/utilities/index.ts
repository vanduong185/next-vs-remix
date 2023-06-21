export const doSthInSec = (second = 5): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("ok");
    }, second * 1000);
  });
};
