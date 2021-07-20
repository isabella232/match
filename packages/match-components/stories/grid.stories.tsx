import { Story, Meta } from "@storybook/react/types-6-0";
import * as React from "react";

import { Grid, Cell } from "../src";

export default {
  title: "Components/Grid",
  component: Grid,
} as Meta;

const DefaultCell: React.FC = (props) => (
  <Cell paddingY="scale260" backgroundColor="light" {...props} />
);

export const Basic: Story = () => (
  <Grid gridRowGap="scale100">
    <Grid gridTemplateColumns="repeat(4, 1fr)" gridGap="scale100">
      <DefaultCell />
      <DefaultCell />
      <DefaultCell />
      <DefaultCell />
    </Grid>
    <Grid gridTemplateColumns="1fr 1fr" gridColumnGap="scale100">
      <DefaultCell />
      <DefaultCell />
    </Grid>
    <Grid gridTemplateColumns="1fr 2fr" gridColumnGap="scale100">
      <DefaultCell />
      <DefaultCell />
    </Grid>
  </Grid>
);

export const Responsive: Story = () => (
  <Grid gridRowGap="scale100">
    <Grid
      gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
      gridGap="scale100"
    >
      <DefaultCell />
      <DefaultCell />
      <DefaultCell />
      <DefaultCell />
    </Grid>
  </Grid>
);
