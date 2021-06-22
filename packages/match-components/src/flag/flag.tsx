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

// bug in html-loader that prevents CommonJS module from being flattened: https://github.com/webpack-contrib/html-loader/issues/203
const resolveCommonModule = (module: { default: string } | string) => {
  if (typeof module === "object") {
    module = module.default;
  }

  return module;
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
