import * as PropTypes from "prop-types";
import * as React from "react";
import { ThemeConsumer as WrappedThemeConsumer } from "styled-components";
import { TwilioThemeShape, SendGridThemeShape } from "./types";

export interface ThemeConsumerProps {
  children: ({
    theme,
  }: {
    theme: TwilioThemeShape | SendGridThemeShape;
  }) => React.ReactNode;
}

export const ThemeConsumer = ({
  children,
  ...props
}: ThemeConsumerProps): React.ReactElement => (
  <WrappedThemeConsumer>
    {(theme) => children({ ...props, theme })}
  </WrappedThemeConsumer>
);

ThemeConsumer.propTypes = {
  children: PropTypes.func,
};
