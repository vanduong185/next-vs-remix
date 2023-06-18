import { json, type V2_MetaFunction } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import { doSthInSec } from "~/utilities";
import Spinner from "~/components/Spinner";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dstore - Home" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  await doSthInSec(2);
  return json({ ok: true });
};

export default function Index() {
  const data = useLoaderData<typeof loader>();

  const { state } = useNavigation();

  console.log(state);

  if (state === "loading") {
    return (
      <div className="p-6 flex justify-center">
        <Spinner />
      </div>
    );
  }

  return <div>Home</div>;
}
