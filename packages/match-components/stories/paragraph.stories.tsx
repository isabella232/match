import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { textColors } from "@twilio-labs/match-tokens/twilio";

import { Paragraph, ParagraphProps, ParagraphVariant } from "../src";

export default {
  title: "Components/Paragraph",
  component: Paragraph,
  args: {
    color: undefined,
    children:
      "Well, Art is Art, isn't it? Still, on the other hand, water is water. And east is east and west is west and if you take cranberries and stew them like applesauce they taste much more like prunes than rhubarb does.",
    variant: Paragraph?.defaultProps?.variant,
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: {
      options: Object.values(ParagraphVariant),
      control: { type: "select" },
    },
    color: {
      options: Object.keys(textColors),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<ParagraphProps> = (args) => <Paragraph {...args} />;

export const Primary = Template.bind({});

export const Inverse = Template.bind({});
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
Inverse.args = {
  color: "inversePrimary",
};
Inverse.argTypes = {
  color: { table: { disable: true } },
};
