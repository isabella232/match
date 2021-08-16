import * as React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Formik } from "formik";

import { Option, Select, SelectProps, SelectSize } from "../src";

export default {
  title: "Components/Select",
  component: Select,
  args: {
    name: "example",
    type: "single",
    size: SelectSize.NORMAL,
    placeholder: "Choose one...",
    label: "Label",
    required: false,
    disabled: false,
    hideLabel: false,
    helperText: "Choose an option from the dropdown",
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    label: {
      control: { type: "text" },
    },
    type: {
      options: ["single"],
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(SelectSize),
      control: { type: "select" },
    },
    required: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    hideLabel: {
      control: { type: "boolean" },
    },
    placeholder: {
      control: { type: "text" },
    },
    helperText: {
      control: { type: "text" },
    },
  },
} as Meta;

const options: Option[] = [
  { value: "first", label: "First option" },
  { value: "second", label: "Second option" },
  { value: "third", label: "Third option" },
];

const Template: Story<SelectProps> = (args) => (
  <Formik initialValues={{ example: "" }} onSubmit={() => {}}>
    <Select {...args} options={options}></Select>
  </Formik>
);

const ErrorTemplate: Story<SelectProps> = (args) => (
  <Formik
    initialValues={{ errorSelect: "" }}
    validateOnMount
    initialTouched={{ errorSelect: true }}
    onSubmit={() => {}}
  >
    <Select
      {...args}
      name="errorSelect"
      options={options}
      required={true}
    ></Select>
  </Formik>
);

export const Primary = Template.bind({});
export const Error = ErrorTemplate.bind({});
