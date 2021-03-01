import * as React from "react";
import * as PropTypes from "prop-types"
import { isoToCountryCode, imageUrl } from "flagpack-core";
import { StyledFlag } from "./styles";
import { FlagSize } from "./constants";
import type { FlagProps } from "./types";

const flagSizeMap = {
  [FlagSize.SMALL]: "S",
  [FlagSize.NORMAL]: "M",
  [FlagSize.LARGE]: "L",
};

export const Flag: React.FC<FlagProps> = ({
  size = FlagSize.NORMAL,
  code,
  ...props
}) => {
  const url = imageUrl(isoToCountryCode(code).toUpperCase(), flagSizeMap[size].toLowerCase());
  return (
    <StyledFlag flagSize={size} src={url.default || url} aria-hidden={!Boolean(props.alt)} {...props} />
  )
  };

  Flag.displayName = "Flag";

  Flag.propTypes = {
    size: PropTypes.oneOf(Object.values(FlagSize)),
    code: PropTypes.string.isRequired
  }
