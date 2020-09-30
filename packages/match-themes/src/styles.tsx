import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    margin: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
`;

const StyledBase = styled.div`
  color: ${({ theme }) => theme.text.primary.color};
  font-weight: ${({ theme }) => theme.fontWeight.regular.value};
  font-size: ${({ theme }) => theme.fontSize.scale100.rem};
  font-family: ${({ theme }) => theme.fontFamily.text};
`;

export { GlobalStyles, StyledBase };
