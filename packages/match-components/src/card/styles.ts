import styled, { css } from "styled-components";
import { space } from "@twilio-labs/match-styling-library";
import { CardProps, CardVariant } from "./types";
import { Box } from "../box";

const variants = {
  [CardVariant.PRIMARY]: css`
    border-color: ${({ theme }) => theme.borderColorCard};
    border-style: solid;
    border-width: ${({ theme }) => theme.components.cardBorderWidth};
    box-shadow: ${({ theme }) => theme.shadowCard};
  `,
  [CardVariant.INVERSE]: css`
    box-shadow: ${({ theme }) => theme.shadowInverse};
  `,
  [CardVariant.BORDER]: css`
    border-color: ${({ theme }) => theme.borderCard};
    border-style: solid;
    border-width: ${({ theme }) => theme.borderWidthThin};
  `,
};

const StyledCard = styled(Box)<CardProps>`
  ${space};
  background-color: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ theme }) => theme.components.cardBorderRadius};
  ${({ variant }) => variant && variants[variant]};
`;

export { StyledCard };
