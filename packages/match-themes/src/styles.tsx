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

const StyledBase = styled.div``;

export { GlobalStyles, StyledBase };
