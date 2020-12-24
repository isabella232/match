import React from "react";

export type ColorProps = {
  value: string;
};

export const Color: React.FC<ColorProps> = ({ value }) => {
  return (
    <svg height="42" width="150" stroke="#E1E3EA" strokeWidth="1">
      <circle cx="40" cy="21" r="20" fill={value} />
    </svg>
  );
};
