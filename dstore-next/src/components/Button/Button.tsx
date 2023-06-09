import React, { HTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className="px-3 py-2 rounded-md bg-primary font-semibold text-white uppercase"
      {...rest}
    >
      {children}
    </button>
  );
}
