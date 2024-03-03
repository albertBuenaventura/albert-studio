import React from "react";
import cx from "classnames";
import { GoogleTagManager } from "@next/third-parties/google";

import { Navbar } from "../components/Navbar";
import useTheme from "../hooks/use-theme";
import { Theme } from "../types/theme";
import dynamic from "next/dynamic";
import { NavItems } from "./Navbar/NavItems";
import { Footer } from "./Footer";
import { Logo } from "@/components/Logo";

export type LayoutProps = {
  children: React.ReactNode;
};

function LayoutComponent({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cx("bg-primary-light h-full w-full min-h-[100vh]", {
        "dark bg-slate-900": theme === Theme.Dark,
      })}
    >
      <GoogleTagManager gtmId="GTM-5W2JS9G3" />

      <Navbar className="bg-primary-light w-full">
        <div className="flex w-full sm:flex-row sm:w-full justify-center sm:justify-between w-fit mt-2">
          <Logo className="hidden ml-6" />
          <NavItems />
        </div>
      </Navbar>
      <div className="px-6 md:px-14 text-black dark:text-white">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export const Layout = dynamic(() => Promise.resolve(LayoutComponent), {
  ssr: false,
});
