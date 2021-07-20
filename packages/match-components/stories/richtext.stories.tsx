import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { RichText, RichTextProps } from "../src";

const children = `
<h1>Hello World</h1>
<h2>Hello World</h2>
<h3>Hello World</h3>
<hr/>
<p><a href="#foo">Hello</a> world</p>
<ol>
<li>Hello</li>
<li>World</li>
</ol>
<ul>
<li>Hello</li>
<li>World</li>
</ul>
`.trim();

export default {
  title: "Components/RichText",
  component: RichText,
  args: {
    inverse: false,
    children,
  },
  argTypes: {
    inverse: {
      table: { disable: true },
    },
    children: {
      control: { type: "text" },
    },
  },
} as Meta;

const Template: Story<RichTextProps> = (args) => <RichText {...args} />;

export const Primary = Template.bind({});

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
