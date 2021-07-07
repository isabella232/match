import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import type {
  LogoProps,
  LogoType,
  ColorLogoProps,
  ColorLogoType,
} from "@twilio-labs/match-logos";
import * as monoLogos from "@twilio-labs/match-logos/mono";
import * as brandLogos from "@twilio-labs/match-logos/brand";
import * as colorLogos from "@twilio-labs/match-logos/color";

export default {
  title: "Foundation/Logos",
  args: {
    maxHeight: "24px",
  },
  argTypes: {
    logos: {
      table: { disable: true },
    },
    maxHeight: {
      options: ["20px", "24px", "32px", "40px", "48px", "60px"],
      control: {
        type: "select",
      },
    },
  },
} as Meta;

interface StoryProps extends LogoProps {
  logos: {
    [name: string]: LogoType;
  };
}

interface ColorStoryProps extends ColorLogoProps {
  logos: {
    [name: string]: ColorLogoType;
  };
}

const Template: Story<StoryProps> = ({ logos, ...args }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gridGap: "2rem",
      justifyItems: "center",
    }}
  >
    {Object.entries(logos).map(([name, Logo]) => (
      <div key={uid(Logo)}>
        <Logo title={name} {...args} />
      </div>
    ))}
  </div>
);

const ColorTemplate: Story<ColorStoryProps> = ({ logos, ...args }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
      gridGap: "2rem",
      justifyItems: "center",
    }}
  >
    {Object.entries(logos).map(([name, Logo]) => (
      <div key={uid(Logo)}>
        <Logo title={name} {...args} />
      </div>
    ))}
  </div>
);

export const Mono = Template.bind({});
Mono.args = {
  logos: monoLogos,
  color: "gray90",
};
Mono.argTypes = {
  color: {
    options: ["gray90", "gray70", "white"],
    control: { type: "select" },
  },
};

export const Color = ColorTemplate.bind({});
Color.args = {
  logos: colorLogos,
};

export const Brand = ColorTemplate.bind({});
Brand.args = {
  logos: brandLogos,
};
