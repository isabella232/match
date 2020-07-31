import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { DesignTokens } from "@twilio-labs/match-tokens";
import { Wombat } from "../src/wombat";

const ds = new DesignTokens();

export default {
  title: "Components/Wombat",
  decorators: [withKnobs],
};

export const withDroppings: React.FC = () => {
  const value = select(
    "Color",
    Object.keys(ds.wombat.droppings),
    Object.keys(ds.wombat.droppings).shift()
  );
  return <Wombat droppings={["🌯", "🍦", "🍔"]} color={value} />;
};
