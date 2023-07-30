import React from "react";
import cx from "classnames";

import { Navbar, NavItem } from "../components/Navbar";
import useTheme from "../hooks/use-theme";
import { Theme } from "../types/theme";
import dynamic from "next/dynamic";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { Button, ButtonVariant } from "@/components/Button";

export type LayoutProps = {
  children: React.ReactNode;
};

function LayoutComponent({ children }: LayoutProps) {
  const { theme } = useTheme();

  console.log(theme);
  return (
    <div
      className={cx({
        dark: theme === Theme.Dark,
      })}
    >
      <Navbar>
        <div className="flex flex-col sm:flex-row sm:w-full justify-between w-fit space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:space-x-9 space-y-4 sm:space-y-0 items-start">
            <NavItem url="#" text="About me" />
            <NavItem url="#" text="Projects" />
            <NavItem url="#" text="Contact" />
          </div>
          <div className="flex sm:space-x-4 flex-col sm:flex-row space-y-4 sm:space-y-0">
            <Button variant={ButtonVariant.Secondary}>Know more</Button>
            <ThemeSwitch className="self-start sm:self-center" />
          </div>
        </div>
      </Navbar>
      <div>{children}</div>
    </div>
  );
}

export const Layout = dynamic(() => Promise.resolve(LayoutComponent), {
  ssr: false,
});
