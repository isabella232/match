import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { RTF, RTFProps } from "../src";

export default {
  title: "Components/RTF",
  component: RTF,
  args: {
    children:
      '<h1>Hello World</h1><h2>Hello World</h2><h3>Hello World</h3><hr/><a href="#foo">Hello</a><hr/>lorem ipsum <a>dolor</a><hr/><pre>Some test</pre>',
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<RTFProps> = (args) => <RTF {...args} />;

export const Primary = Template.bind({});
