import { Link, Outlet, useLocation } from "@remix-run/react";
import clsx from "clsx";
import React from "react";

const links = [
  {
    label: "About us",
    link: "/about-us",
  },
  {
    label: "Review",
    link: "/review",
  },
];

export default function AboutLayout() {
  const { pathname } = useLocation();

  return (
    <div className="mx-auto py-10 container">
      <div className="flex gap-10">
        <div className="w-[200px] h-min flex flex-col gap-4 border-r border-r-gray-500">
          {links.map((item, key) => {
            const isActive = pathname.startsWith(item.link);
            return (
              <Link
                key={key}
                to={item.link}
                className={clsx(
                  "text-gray-600",
                  isActive && "text-secondary text-xl font-semibold"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
