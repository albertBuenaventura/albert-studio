import React from "react";
import { Navbar, NavItem } from "../components/Navbar";

export type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <Navbar>
      <NavItem url="/" text="Projects" />
      <NavItem url="/" text="Contact" />
    </Navbar>
  );
}
