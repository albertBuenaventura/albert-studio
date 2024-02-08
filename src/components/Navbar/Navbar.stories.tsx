import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavItem, NavbarProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";

const defaultArgs: NavbarProps = {};

const Template: Story<NavbarProps> = (props: NavbarProps) => {
  return (
    <StorybookThemeContainer>
      <Navbar {...props}>
        <div className="sm:ml-9 flex sm:flex-row sm:w-full justify-between w-fit space-y-4 sm:space-y-0">
          <div className="flex sm:flex-row space-x-4 items-start">
            <NavItem url="#" text="About me" />
            <NavItem url="#" text="Projects" />
            <NavItem url="#" text="Contact" />
          </div>
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
