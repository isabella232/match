import * as React from "react";
import { uid } from "react-uid";
import * as Icons from "../src";

export default {
  title: "Icons/Twilio",
};

export const AllIcons: React.FC = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(10, 1fr)",
      fontSize: "3rem",
    }}
  >
    {Object.values(Icons)
      .filter((Icon) => typeof Icon === "object")
      .map((Icon) => (
        <div key={uid(Icon)}>
          <Icon />
        </div>
      ))}
  </div>
);
