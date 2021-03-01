import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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

export const StyledBase = styled.div`
  color: ${({ theme }) => theme.textColorPrimary};
  font-weight: ${({ theme }) => theme.fontWeightRegular};
  font-size: ${({ theme }) => theme.fontSizeScale100};
  font-family: ${({ theme }) => theme.fontFamilyText};
`;
