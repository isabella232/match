import { isoToCountryCode, imageUrl, codeList } from "flagpack-core";
import * as PropTypes from "prop-types";
import * as React from "react";
import { FlagSize } from "./constants";
import { StyledFlag } from "./styles";
import type { FlagProps } from "./types";

const flagSizeMap = {
  [FlagSize.SMALL]: "s",
  [FlagSize.NORMAL]: "m",
  [FlagSize.LARGE]: "l",
};

export const Flag: React.FC<FlagProps> = ({
  size = FlagSize.NORMAL,
  code,
  decorative,
  ...props
}) => {
  const countryCode = isoToCountryCode(code).toUpperCase();
  const url = imageUrl(countryCode, flagSizeMap[size]);
  const alt = !decorative
    ? codeList.find(({ alpha2 }) => alpha2 === countryCode)?.countryName
    : undefined;
  return (
    <StyledFlag flagSize={size}>
      <img src={url} alt={alt} aria-hidden={Boolean(decorative)} {...props} />
    </StyledFlag>
  );
};

Flag.displayName = "Flag";

Flag.propTypes = {
  size: PropTypes.oneOf(Object.values(FlagSize)),
  code: PropTypes.string.isRequired,
  decorative: PropTypes.bool,
};

Flag.defaultProps = {
  size: FlagSize.NORMAL,
};
