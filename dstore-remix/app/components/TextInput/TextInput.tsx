import React from "react";
import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  wrapClass?: string;
}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const { label, wrapClass, ...rest } = props;
    return (
      <div className={clsx(wrapClass, "mb-4")}>
        {label && (
          <label className="block mb-1 text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
          {...rest}
        />
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
export default TextInput;
