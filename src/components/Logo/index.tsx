import React from "react";
import cx from "classnames";

export type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cx("flex text-2xl xs:flex text-orange-500", className)}>
      <span className="font-bold">albert</span>
      <span className="">studios.</span>
    </div>
  );
}
