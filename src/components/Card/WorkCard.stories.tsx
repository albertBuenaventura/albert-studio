import React from "react";
import { Story, Meta } from "@storybook/react";

import { WorkCard, WorkCardProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";

const Template: Story<WorkCardProps> = () => {
  return (
    <StorybookThemeContainer>
      <WorkCard
        color="#0084C7"
        imgUrl="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/homeclean-franchise.png"
      >
        <div className="flex h-96 justify-center items-center">
          SAMPLE CONTENT
        </div>
      </WorkCard>
    </StorybookThemeContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "WorkCard",
  component: WorkCard,
  argTypes: {},
} as Meta<WorkCardProps>;
