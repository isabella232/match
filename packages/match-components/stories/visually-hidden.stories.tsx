import * as React from "react";
import { VisuallyHidden } from "../src";

export default {
  title: "Components/VisuallyHidden",
};

export const Paragraph: React.FC = () => (
  <VisuallyHidden as="p">
    {`Outside of a dog, a book is man's best friend. Inside of a dog, it's too dark to read.`}
  </VisuallyHidden>
);
