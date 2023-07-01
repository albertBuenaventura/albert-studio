import React from "react";
import cx from "classnames";
import { Story, Meta } from "@storybook/react";

import { ThemeSwitchPros, ThemeSwitch } from ".";
import useTheme from "../../hooks/use-theme";
import { Theme } from "../../types/theme";

const Template: Story<ThemeSwitchPros> = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cx("w-full h-screen", {
        dark: theme === Theme.Dark,
      })}
    >
      <div className="dark:bg-slate-800 w-full h-full p-10">
        <ThemeSwitch />
      </div>
    </div>
  );
};

export const Default = Template.bind({});

export default {
  title: "ThemeSwitch",
  component: ThemeSwitch,
  argTypes: {},
} as Meta<ThemeSwitchPros>;
