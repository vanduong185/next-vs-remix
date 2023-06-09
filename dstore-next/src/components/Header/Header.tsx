"use client";

import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div className="h-[80px] w-full px-4 flex border-b border-b-light">
      <div className="flex w-full items-center justify-between">
        <div>
          <FaBars />
        </div>
        <div>
          <Link href="/" className="text-xl text-primary font-semibold">
            Dstore
          </Link>
        </div>
        <div>
          <Link href="/sign-in" onClick={() => {}}>
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
