import * as React from "react";
import * as PropTypes from "prop-types";
import { marginPropTypes, textColorPropType } from "@twilio-labs/match-props";
import { StyledParagraph } from "./styles";
import { ParagraphVariant } from "./constants";
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
