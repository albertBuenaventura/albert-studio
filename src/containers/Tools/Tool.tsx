import React from "react";
import cx from "classnames";

export type ToolProps = {
  text: React.ReactNode;
  svg: React.ReactNode;
  className?: string;
};

export function Tool({ text, svg, className }: ToolProps) {
  return (
    <div
      className={cx(
        "flex flex-col items-center p-2 rounded-lg text-center text-2xl text-black dark:text-white space-y-2 border border-2 border-orange-500",
        className
      )}
    >
      <div className="w-20 h-20 fill-black dark:fill-white">{svg}</div>
      <span>{text}</span>
    </div>
  );
}
