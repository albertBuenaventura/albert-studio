import React from "react";
import { Story, Meta } from "@storybook/react";

import { Textarea, TextareaProps } from ".";

const Template: Story<TextareaProps> = () => {
  return (
    <div>
      <Textarea placeholder="Add your input here" />
    </div>
  );
};

export const Default = Template.bind({});

export default {
  title: "Textarea",
  component: Textarea,
  argTypes: {},
} as Meta<TextareaProps>;
