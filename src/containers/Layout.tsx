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

  console.log(theme);
  return (
    <div
      className={cx({
        dark: theme === Theme.Dark,
      })}
    >
      <Navbar>
        <NavItem url="/" text="Projects" />
        <NavItem url="/" text="Contact" />
        <ThemeSwitch />
      </Navbar>
      <div>{children}</div>
    </div>
  );
}

export const Layout = dynamic(() => Promise.resolve(LayoutComponent), {
  ssr: false,
});
