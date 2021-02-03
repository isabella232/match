import styled, { css } from "styled-components";
import type { OptionProps } from "./types";

export const StyledOption = styled.li<OptionProps>`
  padding: 5px;

  ${({ highlighted }) =>
    highlighted &&
    css`
      background: lightgray;
    `}

  ${({ selected }) =>
    selected &&
    css`
      ::after {
        content: " 👈🏽";
      }
    `}
`;

export const StyledCombobox = styled.div`
  position: relative;

  input {
    width: 100%;
    padding: 10px;
    border: 2px solid gray;

    :focus {
      border: 2px solid blue;
      outline: none;
    }
  }

  button {
    position: absolute;
    top: 50%;
    right: 8px;
    padding: 2px;
    background: none;
    border: none;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const StyledListbox = styled.ul`
  position: absolute;
  right: 0;
  bottom: -3px;
  left: 0;
  max-height: 50vh;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  list-style: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transform: translateY(100%);
`;

export const StyledSelect = styled.div`
  position: relative;
`;
