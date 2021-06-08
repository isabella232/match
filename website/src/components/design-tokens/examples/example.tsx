import * as React from "react";
import { Token } from "../../../types";
import {
  example,
  colorExample,
  gradientExample,
  borderExample,
  spacingExample,
  fontWeightExample,
  shadowExample,
  radiusExample,
} from "./examples.module.css";
import iconSvg from "./images/icon.svg";
import { TextColor } from "./text-color";

export type ExampleProps = {
  token: Token;
};

export const Example: React.FC<ExampleProps> = ({ token }) => {
  const { group, name, value } = token;
  switch (group) {
    case "colors":
    case "backgroundColors":
      return (
        <div
          className={colorExample}
          data-token={name}
          style={{ backgroundColor: value }}
        />
      );

    case "gradients":
      return <div style={{ background: value }} className={gradientExample} />;

    case "textColors":
      return <TextColor token={token} />;

    case "fontFamilies":
      return (
        <span style={{ fontFamily: value }}>
          A group of kangaroos is called a mob
        </span>
      );

    case "fontSizes":
      return <span style={{ fontSize: value }}>Aa</span>;

    case "fontWeights":
      return (
        <span
          className={fontWeightExample}
          style={{ fontWeight: Number.parseInt(value, 10) }}
        >
          Aa
        </span>
      );

    case "shadows":
      return <div className={shadowExample} style={{ boxShadow: value }} />;

    case "borderColors":
      return (
        <div
          className={borderExample}
          style={{
            borderColor: value,
          }}
        />
      );

    case "borderWidths":
      return <div className={borderExample} style={{ borderWidth: value }} />;

    case "radii":
      return (
        <div className={example}>
          <div
            className={radiusExample}
            data-token={name}
            style={{ borderRadius: value }}
          />
        </div>
      );

    case "space":
      return (
        <div className={example}>
          <div
            className={spacingExample}
            style={{ width: value, height: value }}
          />
        </div>
      );

    case "iconSizes":
      return (
        <div className={example}>
          <img
            src={iconSvg}
            alt=""
            style={{ width: value, height: value, verticalAlign: "middle" }}
          />
        </div>
      );

    default:
      return null;
  }
};
