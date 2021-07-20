import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import * as React from "react";

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
    additional: "Additional text.",
    error: "",
    required: false,
    readOnly: false,
    disabled: false,
    hideLabel: false,
    minLength: 0,
    maxLength: 255,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    type: {
      options: ["text", "email", "tel", "url", "number", "password"],
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(InputSize),
      control: { type: "select" },
    },
    placeholder: {
      control: { type: "text" },
    },
    label: {
      control: { type: "text" },
    },
    additional: {
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
    minLength: {
      control: { type: "number" },
    },
    maxLength: {
      control: { type: "number" },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => (
  <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
    <Input {...args} />
  </Formik>
);

export const Primary = Template.bind({});
