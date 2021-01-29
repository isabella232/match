import * as React from "react";
import * as PropTypes from "prop-types";
import type { HelpTextProps } from "./types";
import { HelpTextVariant } from "./constants";
import { StyledHelpText } from "./styles";
import { ErrorIcon } from "./error-icon";

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
        <ErrorIcon
          marginRight="scale7"
          size="medium"
          color="red60"
          title="Validation error"
        />
      )}
      {children}
    </StyledHelpText>
  );
};

HelpText.displayName = "HelpText";

HelpText.propTypes = {
  variant: PropTypes.oneOf(Object.values(HelpTextVariant)),
};

HelpText.defaultProps = {
  variant: HelpTextVariant.NORMAL,
};
