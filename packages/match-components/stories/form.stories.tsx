import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Formik, FormValues, FormikErrors } from "formik";
import { Form, Button, Input, Textarea } from "../src";

export default {
  title: "Components/Form",
  component: Form,
  args: {},
  argTypes: {},
} as Meta;

export const Validation: Story = () => {
  return (
    <Formik
      validateOnBlur
      /**
       * Custom validation can be applied here.
       * This allows you to use both the validation built in to Match
       * and your own. Also accepts a Yup validationSchema
       */
      validate={(values) => {
        const errors: FormikErrors<FormValues> = {};
        if (values.name.toLowerCase() === "max power") {
          errors.name = "That's not a real name";
        }
        return errors;
      }}
      initialValues={{ name: "", bio: "", email: "", website: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <Input
          required
          name="name"
          type="text"
          label="Your name"
          minLength={10}
          marginBottom="scale100"
        />
        <Input
          required
          name="email"
          type="email"
          label="Email Address"
          marginBottom="scale100"
          /**
           * You can also specify validation on the field, but it will override the built in Match validation.
           */
          validate={(value) => {
            if (value === "foo@bar.com") {
              return "Yeah right!";
            }
          }}
        />
        <Input
          required
          name="website"
          type="url"
          label="Website"
          marginBottom="scale100"
          /**
           * Disables the built in validation.
           */
          noValidate
        />
        <Textarea
          name="bio"
          label="About You"
          minLength={10}
          marginBottom="scale100"
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};
