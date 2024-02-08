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
      className={`h-full flex items-center text-lg text-orange-600 hover:text-orange-600/75 dark:hover:text-orange-400/75 dark:text-orange-400 ${className}`}
      href={url ?? "#"}
    >
      {text}
    </Link>
  );
}
