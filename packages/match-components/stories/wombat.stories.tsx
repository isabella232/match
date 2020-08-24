import * as React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { TwilioDesignTokens } from "@twilio-labs/match-tokens";
import { Wombat } from "../src/wombat";

const ds = new TwilioDesignTokens();

export default {
  title: "Components/Wombat",
  decorators: [withKnobs],
};

export const withDroppings: React.FC = () => {
  const value = select(
    "Color",
    Object.keys(ds.swatch),
    Object.keys(ds.swatch).shift()
  );
  return <Wombat droppings={["🌯", "🍦", "🍔"]} color={value} />;
};
