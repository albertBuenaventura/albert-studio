import React from "react";
import cx from "classnames";

export type TextareaProps = {
  className?: string;
  error?: boolean;
} & React.HTMLProps<HTMLTextAreaElement>;

export function Textarea({ className, error, ...otherProps }: TextareaProps) {
  return (
    <textarea
      className={cx(
        "border-0 rounded-md py-1.5 px-3 focus:outline-none",
        className,
        {
          "!border border-solid border-red-600 hover:border-red-600 focus:border-red-600":
            error,
        }
      )}
      {...otherProps}
    />
  );
}
