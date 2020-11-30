import styled from "styled-components";
import { variant } from "styled-system";

const StyledHeading = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};

  ${variant({
    variants: {
      h1: {
        fontSize: "scale500",
        lineHeight: "scale125",
        fontWeight: "light",
      },
      h2: {
        fontSize: "scale280",
        lineHeight: "scale140",
        fontWeight: "light",
      },
      h3: {
        fontSize: "scale160",
        lineHeight: "scale180",
        fontWeight: "light",
      },
      h4: {
        fontSize: "scale120",
        lineHeight: "scale180",
        fontWeight: "bold",
      },
      h5: {
        fontSize: "scale120",
        lineHeight: "scale180",
        fontWeight: "bold",
      },
      h6: {
        fontSize: "scale100",
        lineHeight: "scale220",
        fontWeight: "bold",
      },
    },
  })}
`;

export { StyledHeading };
