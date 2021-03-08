import * as React from "react";
import { thing } from "./example.module.css";

export const Example: React.FC = (props) => (
  <span className={thing} {...props} />
);
