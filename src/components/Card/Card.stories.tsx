import React from "react";
import { Story, Meta } from "@storybook/react";

import { Card, CardProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";

const Template: Story<CardProps> = () => {
  return (
    <StorybookThemeContainer>
      <Card>
        <div className="flex h-96 justify-center items-center">
          SAMPLE CONTENT
        </div>
      </Card>
    </StorybookThemeContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "Card",
  component: Card,
  argTypes: {},
} as Meta<CardProps>;
