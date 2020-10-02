import styled from "styled-components";

interface PlaygroundPreviewProps {
  bg: "white" | "blue" | "darkest";
}

const PlaygroundPreview = styled.div<PlaygroundPreviewProps>`
  background: ${({ bg, theme }) => theme.background[bg].color};
  border-color: ${({ bg, theme }) =>
    bg === "white"
      ? "var(--ifm-color-emphasis-200)"
      : theme.background[bg].color};
`;

PlaygroundPreview.defaultProps = {
  bg: "white",
};

export { PlaygroundPreview };
