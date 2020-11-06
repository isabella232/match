import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeConsumer as WrappedThemeConsumer } from "styled-components";
import { TwilioThemeShape, SendGridThemeShape, AhoyThemeShape } from "./types";

export interface ThemeConsumerProps {
  children: ({
    theme,
  }: {
    theme: TwilioThemeShape | SendGridThemeShape | AhoyThemeShape;
  }) => React.ReactNode;
}

const ThemeConsumer = ({
  children,
  ...props
}: ThemeConsumerProps): React.ReactElement => {
  if (!children || typeof children !== "function") {
    throw new Error("[ThemeConsumer]: You must pass a function as children");
  }
  return (
    <WrappedThemeConsumer>
      {(theme) => children({ ...props, theme })}
    </WrappedThemeConsumer>
  );
};

ThemeConsumer.propTypes = {
  children: PropTypes.func,
};

export { ThemeConsumer };
