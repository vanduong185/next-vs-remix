export default async function Home() {
  const doSth = (): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("done");
      }, 5000);
    });
  };

  const value = await doSth();

  console.log(value);

  return <div>Home</div>;
}
