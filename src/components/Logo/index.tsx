import React from "react";
import cx from "classnames";
import Link from "next/link";

export type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link href={"/"}>
      <div className={cx("flex text-2xl xs:flex text-orange-500", className)}>
        <span className="font-bold">albert</span>
        <span className="">studios.</span>
      </div>
    </Link>
  );
}
