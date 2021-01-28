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

export const Validation: Story = () => {
  const [formError, setFormError] = React.useState("");

  /**
   * Any logic can be added here or custom messages can set for validity state defaults.
   */
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.toLowerCase() === "dude") {
      e.currentTarget.setCustomValidity("Dude is not a real name.");
    } else {
      e.currentTarget.setCustomValidity("");
    }
  };

  /**
   * This logic could be included in a <Form /> component.
   * It loops through all form controls and breaks if their validity checks don't pass.
   * */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const { elements } = e.currentTarget;
    setFormError("");
    for (let i = 0; i < elements.length; i++) {
      const el = elements.item(i) as
        | HTMLInputElement
        | HTMLSelectElement
        | HTMLButtonElement;
      console.log(el.name, ": ", el.checkValidity());
      if (!el.checkValidity()) {
        setFormError("Looks like you have some errors...");
        break;
      }
    }
    e.preventDefault();
  };
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Input
        required
        name="name"
        type="text"
        label="Your name"
        minLength={2}
        onChange={onInputChange}
      />
      {formError && <p>{formError}</p>}
      <button type="submit">Submit</button>
    </form>
  );
};
