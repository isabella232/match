import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik } from "formik";
import * as React from "react";
import { Radio, RadioSize, RadioGroup, RadioGroupProps } from "../src";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
  args: {
    name: "group",
    size: RadioSize.NORMAL,
    groupLabel: "Select your favorite fruit:",
    required: false,
    horizontal: false,
    disabled: false,
    readOnly: false,
    additional: "",
  },
  argTypes: {
    name: {
      table: { disable: true },
    },
    groupLabel: {
      control: { type: "text" },
    },
    required: {
      control: { type: "boolean" },
    },
    horizontal: {
      control: { type: "boolean" },
    },
    additional: {
      control: { type: "text" },
    },
    readOnly: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    size: {
      options: Object.values(RadioSize),
      control: { type: "select" },
    },
  },
} as Meta;

const Template: Story<RadioGroupProps> = (args) => (
  <Formik initialValues={{ group: "" }} onSubmit={() => {}}>
    <RadioGroup {...args}>
      <Radio name="group" value="apples" label="apples" />
      <Radio name="group" value="bananas" label="bananas" />
      <Radio name="group" value="oranges" label="oranges" />
    </RadioGroup>
  </Formik>
);

export const Group = Template.bind({});

export const AdditionalText: Story<RadioGroupProps> = ({
  groupLabel,
  ...props
}: RadioGroupProps) => (
  <Formik initialValues={{ group: "" }} onSubmit={() => {}}>
    <RadioGroup groupLabel={groupLabel} {...props}>
      <Radio
        name="group"
        value="mlk"
        label="Martin Luther King Jr"
        additional="Civil rights activist"
      />
      <Radio
        name="group"
        value="mandela"
        label="Nelson Mandela"
        additional="Civil rights leader and former president of South Africa"
      />
      <Radio
        name="group"
        value="einstein"
        label="Albert Einstein"
        additional="Theoretical physicist"
      />
      <Radio
        name="group"
        value="lincoln"
        label="Abraham Lincoln"
        additional="Leader of the Union and former US president"
      />
      <Radio
        name="group"
        value="calcutta"
        label="St. Teresa of Calcutta"
        additional="Nobel laureate and charitable work"
      />
    </RadioGroup>
  </Formik>
);
AdditionalText.args = {
  groupLabel: "Who inspires you most?",
  required: true,
  horizontal: false,
  additional:
    "Choose the individual who you aspire to be like or enjoy reading about!",
};

export const Error: Story<RadioGroupProps> = ({
  groupLabel,
  ...props
}: RadioGroupProps) => (
  <Formik
    initialValues={{ group: "" }}
    validateOnMount
    initialTouched={{ group: true }}
    onSubmit={() => {}}
  >
    <RadioGroup groupLabel={groupLabel} {...props}>
      <Radio name="group" value="apples" label="apples" />
      <Radio name="group" value="bananas" label="bananas" />
      <Radio name="group" value="oranges" label="oranges" />
    </RadioGroup>
  </Formik>
);
Error.args = {
  groupLabel: "Select your favorite fruit:",
  required: true,
  horizontal: false,
  additional: "",
};
