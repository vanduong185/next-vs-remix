import Link from "next/link";
import React from "react";
import { FaBars, FaSignInAlt } from "react-icons/fa";

export default function Header() {
  return (
    <div className="h-[100px] w-full px-4 flex flex-col justify-center border-b border-b-gray-600">
      <div className="relative flex w-full items-center justify-center">
        <div>
          <Link href="/" className="text-2xl text-primary font-semibold">
            Dstore
          </Link>
        </div>
        <div className="absolute right-0">
          <Link
            href="/sign-in"
            className="text-secondary flex items-center gap-2"
          >
            Sign In
            <FaSignInAlt />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4 gap-8 text-sm">
        <Link
          href="/product-list"
          className="text-gray-600 hover:text-secondary"
        >
          Products
        </Link>
        <Link href="/about-us" className="text-gray-600 hover:text-secondary">
          About us
        </Link>
        <Link
          href="/term-of-service"
          className="text-gray-600 hover:text-secondary"
        >
          Term of services
        </Link>
        <Link
          href="/privacy-policies"
          className="text-gray-600 hover:text-secondary"
        >
          Privacy policies
        </Link>
      </div>
    </div>
  );
}
