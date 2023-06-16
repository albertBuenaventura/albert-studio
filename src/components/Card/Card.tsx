import React from "react";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={`h-auto w-80 rounded-md overflow-hidden bg-white dark:bg-slate-800 drop-shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
