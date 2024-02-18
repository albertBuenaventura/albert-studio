import React from "react";
import cx from "classnames";
import { NavItem } from "@/components/Navbar";
import { ThemeSwitch } from "@/components/ThemeSwitch";

export type NavItemsProps = {
  className?: string;
};

export function NavItems({ className }: NavItemsProps) {
  return (
    <div
      className={cx(
        "flex xmd:mr-4 sm:flex-row space-x-2 2xs:space-x-4 items-start",
        className
      )}
    >
      <NavItem url="/" text="home" />
      <NavItem url="/#projects" text="works" />
      <NavItem url="#" text="about" />
      <NavItem url="/contact" text="contact" />
      <ThemeSwitch className="self-center" />
    </div>
  );
}
