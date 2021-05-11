import * as React from "react";
import clsx from "clsx";
import { icon, violator, wrapper } from "./violator.module.css";
import iconArrow from "../../images/icons/arrow-diagonal.svg";

interface ViolatorProps extends React.HTMLAttributes<HTMLElement> {
  text?: string;
  url?: string;
}

export const Violator: React.FC<ViolatorProps> = ({
  className,
  text,
  url,
  ...props
}) => (
  <div className={clsx(wrapper, className)} {...props}>
    {url && (
      <a className={violator} href={url}>
        {text}
        <img className={icon} src={iconArrow} alt="" />
      </a>
    )}

    {!url && <div className={violator}>{text}</div>}
  </div>
);

Violator.propTypes = {};
