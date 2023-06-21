import { defer, type V2_MetaFunction } from "@remix-run/node";
import { Await, useAsyncValue, useLoaderData } from "@remix-run/react";
import { doSthInSec } from "~/utilities";
import Spinner from "~/components/Spinner";
import { Suspense } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dstore - Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  return defer({
    text: doSthInSec(2),
  });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <Suspense
      fallback={
        <div className="p-6 flex justify-center">
          <Spinner />
        </div>
      }
    >
      <Await resolve={data.text}>
        <RenderAwaitedData />
      </Await>
    </Suspense>
  );
}

const RenderAwaitedData = () => {
  const text = useAsyncValue() as any;
  return <p>Home {text}</p>;
};
