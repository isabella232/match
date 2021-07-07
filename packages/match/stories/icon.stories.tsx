import * as React from "react";
import { uid } from "react-uid";
import { Story, Meta } from "@storybook/react/types-6-0";
import type { IconProps, IconType } from "@twilio-labs/match-icons";
import { iconSizes } from "@twilio-labs/match-tokens";
import * as twilioIcons from "@twilio-labs/match-icons/twilio";
import * as sendgridIcons from "@twilio-labs/match-icons/sendgrid";
import * as productIcons from "@twilio-labs/match-icons/product";

export default {
  title: "Foundation/Icons",
  args: {
    color: "gray80",
    size: "base",
  },
  argTypes: {
    icons: {
      table: { disable: true },
    },
    color: {
      options: [
        "white",
        "baseRed",
        "blue50",
        "blue60",
        "blue80",
        "baseGreen",
        "baseOrange",
        "basePurple",
        "gray80",
        "gray90",
        "gray100",
      ],
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.keys(iconSizes),
      control: { type: "select" },
    },
  },
} as Meta;

interface StoryProps extends Pick<IconProps, "color" | "size"> {
  icons: {
    [name: string]: IconType;
  };
}

const Template: Story<StoryProps> = ({ icons, ...args }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      gridGap: "1rem",
      justifyItems: "center",
    }}
  >
    {Object.entries(icons).map(([name, Icon]) => (
      <div key={uid(Icon)}>
        <Icon title={name} {...args} />
      </div>
    ))}
  </div>
);

export const Twilio = Template.bind({});
Twilio.args = {
  icons: twilioIcons,
};

export const Sendgrid = Template.bind({});
Sendgrid.args = {
  icons: sendgridIcons,
};

export const Product = Template.bind({});
Product.args = {
  icons: productIcons,
};
