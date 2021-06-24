import { isoToCountryCode, imageUrl } from "flagpack-core";
import * as PropTypes from "prop-types";
import * as React from "react";
import { resolveCommonModule } from "./utils";
import { FlagSize } from "./constants";
import { StyledFlag } from "./styles";
import type { FlagProps } from "./types";

const flagSizeMap = {
  [FlagSize.SMALL]: "s",
  [FlagSize.NORMAL]: "m",
  [FlagSize.LARGE]: "l",
};

export const Flag: React.FC<FlagProps> = ({
  size,
  code,
  decorative,
  ...props
}) => {
  const countryCode = isoToCountryCode(code).toUpperCase();
  const url = size && imageUrl(countryCode, flagSizeMap[size]);
  const alt = !decorative ? isoToCountryCode(code, "countryName") : undefined;
  return (
    <StyledFlag flagSize={size}>
      <img
        src={resolveCommonModule(url)}
        alt={alt}
        aria-hidden={Boolean(decorative)}
        {...props}
      />
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
