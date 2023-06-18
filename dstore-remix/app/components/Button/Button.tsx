import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import React from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="px-8 py-2 rounded-md bg-primary font-semibold text-white uppercase"
      {...rest}
    >
      {children}
    </button>
  );
}
