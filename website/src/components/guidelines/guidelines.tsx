import clsx from "clsx";
import * as React from "react";
import {
  guidelines,
  heading,
  doGuide,
  doNotGuide,
} from "./guidelines.module.css";
import doNotIcon from "./images/do-not.svg";
import doIcon from "./images/do.svg";

export interface GuidelineProps {
  children: React.ReactNode;
  variant: "do" | "doNot";
}

export const Guidelines: React.FC = ({ children }) => (
  <div className={guidelines}>{children}</div>
);

export const Guideline: React.FC<GuidelineProps> = ({ children, variant }) => (
  <div
    className={clsx({
      [doGuide]: variant === "do",
      [doNotGuide]: variant === "doNot",
    })}
  >
    <div className={heading}>
      <img
        src={variant === "do" ? doIcon : doNotIcon}
        alt=""
        aria-hidden={true}
      />
      {variant === "do" ? "Do" : "Don't"}
    </div>
    {typeof children === "string" ? <p>{children}</p> : children}
  </div>
);

export const Do: React.FC<Omit<GuidelineProps, "variant">> = (props) => (
  <Guideline variant="do" {...props} />
);

export const DoNot: React.FC<Omit<GuidelineProps, "variant">> = (props) => (
  <Guideline variant="doNot" {...props} />
);
