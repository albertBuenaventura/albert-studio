import React from "react";
import { Story, Meta } from "@storybook/react";

import { Navbar, NavItem, NavbarProps } from ".";

const defaultArgs: NavbarProps = {};

const Template: Story<NavbarProps> = (props: NavbarProps) => {
  return (
    <div>
      <Navbar {...props}>
        <NavItem url="#" text="About me" />
        <NavItem url="#" text="Projects" />
        <NavItem url="#" text="Contact" />
      </Navbar>
      <div className="h-96 bg-black text-white">Im a content</div>
    </div>
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
