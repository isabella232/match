import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Wombat } from "../src/wombat";

export default {
  title: "Components/Wombat",
  decorators: [withKnobs],
};

export const withDroppings: React.FC = () => {
  const value = select(
    "Color",
    ["chocolate", "olive", "darkgoldenrod"],
    "darkgoldenrod"
  );
  return <Wombat droppings={["🌯", "🍦", "🍔"]} color={value} />;
};
