import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps, ButtonVariant } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";

const defaultArgs: ButtonProps = {
  children: "Click me",
  disabled: false,
};

const Template: Story<ButtonProps> = (props: ButtonProps) => {
  return (
    <StorybookThemeContainer>
      <Button {...props} />
    </StorybookThemeContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  variant: ButtonVariant.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  variant: ButtonVariant.Secondary,
};

export default {
  title: "Buttons",
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "select",
        options: ButtonVariant,
      },
    },
  },
} as Meta<ButtonProps>;
