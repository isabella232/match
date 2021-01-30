import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ColorLogo } from "@twilio-labs/match-primitives";
import * as BrandLogos from "../generated";

export default {
  title: "Logos/Brand",
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
    {Object.values(BrandLogos)
      .filter((BrandLogo) => typeof BrandLogo === "function")
      .map((BrandLogo) => (
        <div key={uid(BrandLogo)}>
          <BrandLogo maxHeight="2.5rem" />
        </div>
      ))}
  </div>
);
