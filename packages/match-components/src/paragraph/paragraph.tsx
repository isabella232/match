import * as PropTypes from "prop-types";
import * as React from "react";

import { marginPropTypes, textColorPropType } from "@twilio-labs/match-props";

import { ParagraphVariant } from "./constants";
import { StyledParagraph } from "./styles";
import type { ParagraphProps } from "./types";

export const Paragraph: React.FC<ParagraphProps> = (props) => (
  <StyledParagraph {...props} />
);

Paragraph.propTypes = {
  ...marginPropTypes,
  variant: PropTypes.oneOf(Object.values(ParagraphVariant)),
  color: textColorPropType,
  textAlign: PropTypes.oneOf(["left", "center"]),
};

Paragraph.displayName = "Paragraph";

Paragraph.defaultProps = {
  variant: ParagraphVariant.MEDIUM,
  textAlign: "left",
};
