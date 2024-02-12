import React from "react";
import cx from "classnames";

import { Navbar, NavItem } from "../components/Navbar";
import useTheme from "../hooks/use-theme";
import { Theme } from "../types/theme";
import dynamic from "next/dynamic";
import { ThemeSwitch } from "../components/ThemeSwitch";

export type LayoutProps = {
  children: React.ReactNode;
};

function LayoutComponent({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cx("bg-primary-light h-full w-full", {
        "dark bg-slate-900": theme === Theme.Dark,
      })}
    >
      <Navbar className="!fixed w-full">
        <div className="flex w-full sm:flex-row sm:w-full justify-center xs:justify-between w-fit mt-2">
          <div className="hidden flex ml-6 text-2xl xs:flex text-orange-500">
            <span className="font-bold">albert</span>
            <span className="">studios.</span>
          </div>
          <div className="flex xmd:mr-4 sm:flex-row space-x-4 items-start">
            <NavItem url="#" text="works" />
            <NavItem url="#" text="services" />
            <NavItem url="#" text="contact" />
            <ThemeSwitch className="self-center" />
          </div>
        </div>
      </Navbar>
      <div className="p-4 md:p-14">{children}</div>
    </div>
  );
}

export const Layout = dynamic(() => Promise.resolve(LayoutComponent), {
  ssr: false,
});
