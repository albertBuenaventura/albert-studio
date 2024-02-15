import React from "react";
import { Story, Meta } from "@storybook/react";

import { WorkCard, WorkCardProps } from ".";
import StorybookThemeContainer from "../StorybookThemeContainer";
import { Button } from "../Button";

const Template: Story<WorkCardProps> = () => {
  return (
    <StorybookThemeContainer>
      <WorkCard
        name="Homeclean Franchise"
        color="#0084C7"
        imgUrl="https://albertstudios.s3.ap-southeast-2.amazonaws.com/images/homeclean-franchise.png"
        cta={<Button>Visit Website</Button>}
      ></WorkCard>
    </StorybookThemeContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "WorkCard",
  component: WorkCard,
  argTypes: {},
} as Meta<WorkCardProps>;
