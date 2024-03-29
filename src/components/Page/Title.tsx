import React from "react";
import cx from "classnames";

export type TitleProps = {
  text: React.ReactNode;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return (
    <div
      className={cx(
        "text-3xl lg:text-4xl whitespace-nowrap text-black dark:text-white dark:text-orange-400",
        className
      )}
    >
      <span className="text-orange-600 dark:text-orange-400">&lt;</span>
      <span>{text}</span>
      <span className="text-orange-600 dark:text-orange-400">&gt;</span>
    </div>
  );
}
