import styled from "styled-components";
import { variant } from "styled-system";

const StyledHeading = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamilies.heading};

  ${({ theme }) =>
    variant({
      variants: {
        h1: {
          fontSize: [
            "scale280",
            undefined,
            theme.components.headingH1SizeMedium,
            "scale420",
          ],
          lineHeight: "scale125",
          fontWeight: theme.components.headingH1Weight,
        },
        h2: {
          fontSize: [
            "scale220",
            undefined,
            theme.components.headingH2SizeMedium,
            theme.components.headingH2SizeLarge,
          ],
          lineHeight: "scale140",
          fontWeight: theme.components.headingH2Weight,
        },
        h3: {
          fontSize: [
            theme.components.headingH3Size,
            undefined,
            theme.components.headingH3SizeMedium,
            theme.components.headingH3SizeLarge,
          ],
          lineHeight: theme.components.headingH3LineHeight,
          fontWeight: theme.components.headingH3Weight,
        },
        h4: {
          fontSize: "scale120",
          lineHeight: "scale180",
          fontWeight: theme.components.headingH4Weight,
        },
        h5: {
          fontSize: "scale100",
          lineHeight: "scale220",
          fontWeight: "bold",
        },
        h6: {
          fontSize: "scale80",
          lineHeight: "scale220",
          fontWeight: "bold",
        },
      },
    })}
`;

export { StyledHeading };
