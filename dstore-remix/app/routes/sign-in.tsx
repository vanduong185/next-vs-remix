import React from "react";
import type { V2_MetaFunction } from "@remix-run/node";
import SignInForm from "~/components/SignInForm";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Dstore - Sign In" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function SignIn() {
  return (
    <div className="py-6">
      <SignInForm />
    </div>
  );
}
