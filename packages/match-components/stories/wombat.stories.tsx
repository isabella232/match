import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { WombatDesignTokens } from "@twilio-labs/match-tokens";
import { Wombat } from "../src/wombat";

const ds = new WombatDesignTokens();

export default {
  title: "Components/Wombat",
  decorators: [withKnobs],
};

export const withDroppings: React.FC = () => {
  const value = select(
    "Color",
    Object.keys(ds.droppings),
    Object.keys(ds.droppings).shift()
  );
  return <Wombat droppings={["🌯", "🍦", "🍔"]} color={value} />;
};
