import * as React from "react";

import { Truncate } from "../src";

export default {
  title: "Components/Truncate",
};

export const Text: React.FC = () => (
  <p style={{ width: "400px" }}>
    <Truncate>
      The parent of this text has a width of 400px, so anything past that will
      get truncated
    </Truncate>
  </p>
);
