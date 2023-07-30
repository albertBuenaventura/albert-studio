import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavItem, NavbarProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";
import { Button, ButtonVariant } from "../Button";

const defaultArgs: NavbarProps = {};

const Template: Story<NavbarProps> = (props: NavbarProps) => {
  return (
    <StorybookThemeContainer>
      <Navbar {...props}>
        <div className="sm:ml-9 flex flex-col sm:flex-row sm:w-full justify-between w-fit space-y-4 sm:space-y-0">
          <div className="flex flex-col sm:flex-row sm:space-x-9 space-y-4 sm:space-y-0 items-start">
            <NavItem url="#" text="About me" />
            <NavItem url="#" text="Projects" />
            <NavItem url="#" text="Contact" />
          </div>
          <Button variant={ButtonVariant.Secondary}>Know more</Button>
        </div>
      </Navbar>
    </StorybookThemeContainer>
  );
};

export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
};

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
} as Meta<NavbarProps>;
