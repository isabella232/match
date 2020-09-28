import * as React from "react";
import { withKnobs, select, boolean, text } from "@storybook/addon-knobs";
import { Button, ButtonVariant, ButtonSize } from "../src";

export default {
  title: "Components/Button",
  decorators: [withKnobs],
};

export const button: React.FC = () => {
  const variant = select(
    "Variant",
    Object.values(ButtonVariant),
    Object.values(ButtonVariant).shift()
  );
  const size = select(
    "Size",
    Object.values(ButtonSize),
    Object.values(ButtonSize).shift()
  );
  return (
    <Button
      variant={variant}
      size={size}
      disabled={boolean("Disabled", false)}
      fullWidth={boolean("Full Width", false)}
      href={text("href", "")}
    >
      Click Me
    </Button>
  );
};
