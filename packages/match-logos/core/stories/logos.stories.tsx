import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Logo, LogoProps } from "@twilio-labs/match-primitives";
import * as Logos from "../src";

export default {
  title: "Logos/Monochromatic",
  component: Logo,
  args: {
    color: "gray90",
  },
  argTypes: {
    color: {
      control: { type: "select", options: ["gray90", "gray70", "white"] },
    },
  },
} as Meta;

export const AllLogos: Story<LogoProps> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gridGap: "2rem",
      justifyItems: "center",
      alignItems: "center",
    }}
  >
    {Object.values(Logos)
      .filter((Logo) => typeof Logo === "function")
      .map((Logo) => (
        <div key={uid(Logo)}>
          <Logo {...args} />
        </div>
      ))}
  </div>
);
