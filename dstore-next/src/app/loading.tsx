import React from "react";
import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="p-6 flex justify-center">
      <Spinner />
    </div>
  );
}
