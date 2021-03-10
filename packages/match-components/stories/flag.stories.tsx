import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { codeList } from "flagpack-core";
import { Flag, FlagProps, FlagSize } from "../src/flag";

export default {
  title: "Components/Flag",
  component: Flag,
  args: {
    size: FlagSize.NORMAL,
    decorative: false,
  },
  argTypes: {
    size: {
      control: { type: "select", options: Object.values(FlagSize) },
    },
    decorative: {
      control: { type: "boolean" },
    },
  },
} as Meta;

export const AllFlags: Story<FlagProps> = (args) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(24px, 1fr))",
      gridGap: "2rem",
      justifyItems: "center",
      alignItems: "center",
    }}
  >
    {codeList.map(({ alpha2 }) => (
      <div key={alpha2}>
        <Flag code={alpha2} {...args} />
      </div>
    ))}
  </div>
);
