import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {codeList} from "flagpack-core";
import { Flag, FlagProps, FlagSize } from "../src";
import { space } from "@twilio-labs/match-tokens";

export default {
  title: "Components/Flag",
  component: Flag,
  args: {
    size: FlagSize.NORMAL,
  },
  argTypes: {
    size: {
      control: { type: "select", options: Object.values(FlagSize) },
    },
  },
} as Meta;

export const AllFlags: Story<FlagProps> = (args) => (
  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(24px, 1fr))",
    gridGap: "2rem",
    justifyItems: "center",
    alignItems: "center",
  }}>
    {codeList.map(({alpha2}) => (
      <div>
        {console.log(alpha2)}
        <Flag code={alpha2} {...args} />
      </div>
    ))}
  </div>
);

