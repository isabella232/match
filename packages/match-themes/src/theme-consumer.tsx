import * as React from "react";
import * as PropTypes from "prop-types";
import { ThemeConsumer } from "styled-components";

export interface MatchThemeConsumerProps {
  children: ({ theme }: { theme: Record<string, unknown> }) => React.ReactNode;
}

const MatchThemeConsumer = ({
  children,
  ...props
}: MatchThemeConsumerProps): React.ReactElement => {
  if (!children || typeof children !== "function") {
    throw new Error("[ThemeConsumer]: You must pass a function as children");
  }
  return (
    <ThemeConsumer>{(theme) => children({ ...props, theme })}</ThemeConsumer>
  );
};

MatchThemeConsumer.propTypes = {
  children: PropTypes.func,
};

export { MatchThemeConsumer };
