import React from "react";
import cx from "classnames";

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
  type?: "button" | "submit" | "reset";
} & React.HTMLProps<HTMLButtonElement>;

const baseClass = "rounded-full h-11 py-2 px-4";

const variantClass = {
  [ButtonVariant.Primary]:
    "text-white dark:text-orange-400 bg-orange-600 hover:bg-orange-600/75 dark:bg-slate-800 dark:hover:bg-slate-800/75",
  [ButtonVariant.Secondary]:
    "bg-transparent text-orange-600 border border-solid border-orange-600 hover:text-white hover:bg-orange-600 dark:bg-slate-800 dark:text-slate-500 dark:border-slate-800 dark:hover:text-white dark:hover:bg-slate-800/50",
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
      className={cx(`${variantClass[variant]} ${baseClass} ${className}`, {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
