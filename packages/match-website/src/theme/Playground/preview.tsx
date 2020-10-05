import styled from "styled-components";

interface PlaygroundPreviewProps {
  bg: "white" | "blue" | "darkest";
}

const PlaygroundPreview = styled.div<PlaygroundPreviewProps>`
  background: ${({ bg, theme }) => theme.background[bg].color};
`;

PlaygroundPreview.defaultProps = {
  bg: "white",
};

export { PlaygroundPreview };
