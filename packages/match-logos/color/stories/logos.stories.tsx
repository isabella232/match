import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ColorLogo } from "@twilio-labs/match-primitives";
import * as ColorLogos from "../src";

export default {
  title: "Logos/Color",
  component: ColorLogo,
} as Meta;

export const AllLogos: Story = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gridGap: "2rem",
      justifyItems: "center",
      alignItems: "center",
    }}
  >
    {Object.values(ColorLogos)
      .filter((ColorLogo) => typeof ColorLogo === "function")
      .map((ColorLogo) => (
        <div key={uid(ColorLogo)}>
          <ColorLogo />
        </div>
      ))}
  </div>
);
