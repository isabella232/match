import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import * as React from "react";
import { Textarea, TextareaProps, TextareaResizeOptions } from "../src";

const defaultValue = `
I opened my eyes
And looked up at the rain,
And it dripped in my head
And flowed into my brain,
And all that I hear as I lie in my bed
Is the slishity-slosh of the rain in my head.
`.trim();

export default {
  title: "Components/Textarea",
  component: Textarea,
  args: {
    ...Textarea.defaultProps,
    name: "example",
    placeholder: "Placeholder text",
    label: "Label",
    additional: "Additional text.",
    required: false,
    readOnly: false,
    disabled: false,
    hideLabel: false,
  },
  argTypes: {
    name: {
      table: { disable: true },
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
    rows: {
      control: { type: "number", options: { min: 3, max: 10 } },
    },
    resize: {
      options: Object.values(TextareaResizeOptions),
      control: {
        type: "select",
      },
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

const Template: Story<TextareaProps> = (args) => (
  <Formik initialValues={{ example: defaultValue }} onSubmit={() => {}}>
    <Textarea minLength={20} {...args} />
  </Formik>
);

export const Primary = Template.bind({});
