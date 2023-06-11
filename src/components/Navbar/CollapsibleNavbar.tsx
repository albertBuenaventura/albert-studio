import React from "react";
import cx from "classnames";
import { NavItemProps } from "./NavItem";

export type NavbarProps = {
  className?: string;
  children?:
    | React.ReactElement<NavItemProps>
    | React.ReactElement<NavItemProps>[];
};

export function CollapsibleNavbar({ children, className = "" }: NavbarProps) {
  return (
    <div
      className={cx(
        "absolute p-5 drop-shadow-lg w-full space-y-5 bg-slate-900 z-50",
        className
      )}
    >
      {children}
    </div>
  );
}
