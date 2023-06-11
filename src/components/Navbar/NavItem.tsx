import React from "react";
import Link from "next/link";

export type NavItemProps = {
  text: string;
  url?: string;
  className?: string;
};

export function NavItem({ text, url, className = "" }: NavItemProps) {
  return (
    <Link
      className={`h-full flex items-center text-xl font-bold text-slate-500 hover:text-white ${className}`}
      href={url ?? "#"}
    >
      {text}
    </Link>
  );
}
