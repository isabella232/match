import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Textarea, TextareaProps } from "../src";

const value = `
I opened my eyes
And looked up at the rain,
And it dripped in my head
And flowed into my brain,
And all that I hear as I lie in my bed
Is the slishity-slosh of the rain in my head.
`.trim();

export default {
  value,
  title: "Components/Textarea",
  component: Textarea,
  args: {
    name: "example",
    placeholder: "Placeholder text",
    label: "Label",
    helper: "Helper text.",
    error: "",
    rows: 3,
    required: false,
    readOnly: false,
    disabled: false,
    hideLabel: false,
  },
  argTypes: {
    value: {
      table: { disable: true },
    },
    name: {
      table: { disable: true },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    helper: {
      control: { type: "text" },
    },
    error: {
      control: { type: "text" },
    },
    rows: {
      control: { type: "number", options: { min: 3, max: 10 } },
    },
    required: {
      control: { type: "boolean" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    hideLabel: {
      control: { type: "boolean" },
    },
  },
} as Meta;

const Template: Story<TextareaProps> = (args) => <Textarea {...args} />;

export const Primary = Template.bind({});
