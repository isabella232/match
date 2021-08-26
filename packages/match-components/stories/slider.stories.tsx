import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import * as React from "react";

import { LabelAlignment } from "@twilio-labs/match-primitives";

import { Slider, SliderProps } from "../src";

export default {
  title: "Components/Slider",
  component: Slider,
  args: {
    name: "example",
    label: "Number of things:",
    maxPlus: false,
    required: false,
    disabled: false,
    min: 0,
    max: 1000,
    step: 1,
    validate: undefined,
    alignment: LabelAlignment.LEFT,
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    validate: {
      table: { disable: true },
    },
    label: {
      control: { type: "text" },
    },
    maxPlus: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
    min: {
      control: { type: "number" },
    },
    max: {
      control: { type: "number" },
    },
    step: {
      control: { type: "number" },
    },
    alignment: {
      options: Object.values(LabelAlignment),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<SliderProps> = (args) => (
  <Formik
    validateOnMount
    initialTouched={{ example: true }}
    initialValues={{ example: 250 }}
    onSubmit={() => {}}
  >
    <Slider {...args} />
  </Formik>
);

export const Primary = Template.bind({});

export const Centered = Template.bind({});
Centered.args = {
  alignment: LabelAlignment.CENTER,
  label: "things",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  validate: () => "Error Message",
};
