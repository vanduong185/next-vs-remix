import type { V2_MetaFunction } from "@remix-run/node";
import React from "react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dstore - Review" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Review() {
  return (
    <div>
      <p className="text-3xl mb-8">Review</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        adipisci neque voluptas nesciunt reiciendis earum inventore ipsa ex,
        sint, maiores alias porro, dicta nihil eveniet minus sapiente assumenda
        quasi odit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        adipisci neque voluptas nesciunt reiciendis earum inventore ipsa ex,
        sint, maiores alias porro, dicta nihil eveniet minus sapiente assumenda
        quasi odit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        adipisci neque voluptas nesciunt reiciendis earum inventore ipsa ex,
        sint, maiores alias porro, dicta nihil eveniet minus sapiente assumenda
        quasi odit!
      </p>
    </div>
  );
}
