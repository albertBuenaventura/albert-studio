import React from "react";

export enum ButtonVariant {
  Primary,
  Secondary,
}

export type ButtonProps = {
  variant?: ButtonVariant;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
  className?: string;
} & React.HTMLAttributes<HTMLButtonElement>;

const baseClass = "rounded-full h-11 py-2 px-4";

const variantClass = {
  [ButtonVariant.Primary]:
    "text-white bg-maroon hover:bg-maroon/75 dark:bg-slate-800 dark:hover:bg-slate-800/75",
  [ButtonVariant.Secondary]:
    "bg-transparent text-maroon border border-solid border-maroon hover:text-white hover:bg-maroon dark:bg-slate-800 dark:text-slate-500 dark:border-slate-800 dark:hover:text-white dark:hover:bg-slate-800/50",
};

export function Button({
  variant = ButtonVariant.Primary,
  onClick,
  children,
  disabled,
  className = "",
  ...otherProps
}: ButtonProps) {
  return (
    <button
      {...otherProps}
      className={`${variantClass[variant]} ${baseClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
