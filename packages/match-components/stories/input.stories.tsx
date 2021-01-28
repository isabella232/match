import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Input, InputProps, InputSize } from "../src";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    name: "example",
    type: "text",
    size: InputSize.NORMAL,
    placeholder: "Placeholder text",
    label: "Label",
    helper: "Helper text.",
    error: "",
    required: false,
    readOnly: false,
    disabled: false,
    hideLabel: false,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    type: {
      control: {
        type: "select",
        options: ["text", "email", "tel", "url", "number", "password"],
      },
    },
    size: {
      control: { type: "select", options: Object.values(InputSize) },
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

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
