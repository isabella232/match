import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import {
  List,
  ListItem,
  ListProps,
  ListSize,
  ListVariant,
  Anchor,
} from "../src";

export default {
  title: "Components/List",
  component: List,
  args: {
    children: [],
    ...List.defaultProps,
  },
  argTypes: {
    children: { table: { disable: true } },
    variant: { table: { disable: true } },
    inverse: { table: { disable: true } },
    size: {
      control: { type: "select", options: Object.values(ListSize) },
    },
  },
} as Meta;

const Template: Story<ListProps> = (args) => <List {...args} />;

export const Bulleted = Template.bind({});
Bulleted.args = {
  variant: "bulleted",
  children: [
    <ListItem key="milk" additional="Oatly, please!">
      Gallon of Milk
    </ListItem>,
    <ListItem key="butter">
      Stick of{" "}
      <Anchor href="https://en.wikipedia.org/wiki/Butter">butter</Anchor>
    </ListItem>,
    <ListItem key="bread">
      Loaf of bread
      <List variant="bulleted">
        <ListItem>Rye</ListItem>
        <ListItem>Sourdough</ListItem>
      </List>
    </ListItem>,
  ],
};

export const Numbered = Template.bind({});
Numbered.args = {
  variant: "numbered",
  children: [
    <ListItem key="step1">
      Tie a left over right starting knot. Make the right end into a loop by
      doubling it back onto itself.
      <List>
        <ListItem>Your shoes should be on your feet.</ListItem>
        <ListItem>Ensure that your shoes have laces.</ListItem>
      </List>
    </ListItem>,
    <ListItem key="step2">
      Take the left end and pass it around to the right, going behind the right
      loop.
    </ListItem>,
    <ListItem key="step3">
      Continue the left end around the right loop to end up in front.
    </ListItem>,
  ],
};

export const Icon = Template.bind({});
Icon.args = {
  variant: "icon",
  children: [
    <ListItem key="milk">Gallon of bread</ListItem>,
    <ListItem key="butter">Stick of milk</ListItem>,
    <ListItem key="bread" additional="Unsalted, please!">
      Loaf of butter
    </ListItem>,
  ],
};

export const Inverse = Template.bind({});
Inverse.args = {
  inverse: true,
  children: [
    <ListItem key="milk">Gallon of Butter</ListItem>,
    <ListItem key="butter">Stick of bread</ListItem>,
    <ListItem key="bread">Loaf of milk</ListItem>,
  ],
};
Inverse.parameters = {
  backgrounds: { default: "Darkest" },
};
Inverse.argTypes = {
  variant: {
    table: { disable: false },
    control: { type: "select", options: Object.values(ListVariant) },
  },
};
