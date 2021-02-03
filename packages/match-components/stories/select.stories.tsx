import * as React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Select, Option } from "../src";

export default {
  title: "Components/Select",
  component: Select,
  args: {},
  argTypes: {},
} as Meta;

// const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Primary: Story = () => {
  const characters = [
    "Abracadaniel",
    "Ancient Sleeping Magi of Life Giving",
    "Banana Man",
    "Betty Grof",
    "Billy",
    "Boy Bear",
    "Bronwyn",
    "Bufo",
    "Charlie",
    "Chet",
    "Chocoberry",
    "Choose Goose",
    "Cinnamon Bun",
    "Cosmic Owl",
    "Crunchy/Chicle",
    "Cuber",
    "Death",
    "Dr. Ice Cream",
    "Elise",
    "Fern",
    "Flambo",
    "Flame King",
    "Football",
    "Forest Wizard",
  ];
  return (
    <div style={{ maxWidth: "300px" }}>
      <Select name="character" label="Choose your character">
        {characters.map((character) => (
          <Option key={character} value={character}>
            {character}
          </Option>
        ))}
      </Select>
    </div>
  );
};
