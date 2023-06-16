import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavItem, NavbarProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";

const defaultArgs: NavbarProps = {};

const Template: Story<NavbarProps> = (props: NavbarProps) => {
  return (
    <StorybookThemeContainer>
      <Navbar {...props}>
        <NavItem url="#" text="About me" />
        <NavItem url="#" text="Projects" />
        <NavItem url="#" text="Contact" />
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
