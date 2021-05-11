import * as React from "react";
import { Tooltip } from "../tooltip";

export interface CopyProps {
  token?: string;
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const Copy: React.FC<CopyProps> = ({ token, value, ...props }) => {
  const [copyMessage, setCopyMessage] = React.useState<string | null>(null);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => setCopyMessage("Copied!"))
      .catch(() => setCopyMessage("Could not copy"));
  };

  return (
    <Tooltip
      tip={copyMessage || (token ? `Copy ${token}` : "Copy")}
      onClick={copyToClipboard}
      onKeyDown={(e) => e.key === "Enter" && copyToClipboard()}
      onBlur={() => setCopyMessage(null)}
      {...props}
    />
  );
};
