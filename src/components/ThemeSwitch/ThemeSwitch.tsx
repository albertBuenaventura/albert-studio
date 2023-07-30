import React, { useCallback, useEffect } from "react";
import cx from "classnames";
import { Theme } from "../../types/theme";
import useTheme from "../../hooks/use-theme";

export type ThemeSwitchPros = {
  className?: string;
  onSwitch?: (theme: Theme) => void;
};

export function ThemeSwitch({ onSwitch, className }: ThemeSwitchPros) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback(() => {
    if (theme === Theme.Dark) {
      setTheme(Theme.Light);
    } else {
      setTheme(Theme.Dark);
    }
  }, [onSwitch, theme]);

  useEffect(() => {
    if (theme) {
      onSwitch?.(theme);
    }
  }, [theme]);

  return (
    <div
      className={cx(
        "flex w-12 p-1 h-fit bg-slate-800 dark:bg-white rounded-2xl",
        className
      )}
      role="button"
      onClick={toggleTheme}
    >
      <div className="w-5 h-3.5 bg-white rounded-lg dark:bg-slate-800 dark:ml-5 transition-[margin-left] duration-200" />
    </div>
  );
}
