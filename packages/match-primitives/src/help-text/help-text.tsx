import * as PropTypes from "prop-types";
import * as React from "react";
import { HelpTextVariant } from "./constants";
import { ErrorIcon } from "./error-icon";
import { StyledHelpText } from "./styles";
import type { HelpTextProps } from "./types";

export const HelpText: React.FC<HelpTextProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <StyledHelpText
      variant={variant}
      role={variant === HelpTextVariant.ERROR ? "alert" : undefined}
      {...props}
    >
      {variant === HelpTextVariant.ERROR && (
        <ErrorIcon marginRight="scale7" size="medium" color="red60" />
      )}
      {children}
    </StyledHelpText>
  );
};

HelpText.displayName = "HelpText";

HelpText.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(HelpTextVariant)),
};

HelpText.defaultProps = {
  variant: HelpTextVariant.NORMAL,
};
