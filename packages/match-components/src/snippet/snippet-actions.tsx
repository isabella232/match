import * as React from "react";
import { Tooltip, TooltipReference, useTooltipState } from "reakit/Tooltip";
import { Button } from "reakit/Button";
import type { SnippetActionsProps } from "./types";
import {
  StyledSnippetActions,
  StyledSnippetTooltip,
  StyledSnippetTooltipArrow,
} from "./styles";
import { CopyIcon } from "./copy-icon";
import { GithubIcon } from "./github-icon";

const SnippetActions: React.FC<SnippetActionsProps> = ({
  code,
  githubLink,
  variant,
}) => {
  const copyTooltip = useTooltipState();
  const githubTooltip = useTooltipState();

  const copyToClipboard = () => {
    if (!navigator || !navigator.clipboard) return;
    navigator.clipboard.writeText(code);
  };

  return (
    <StyledSnippetActions variant={variant}>
      <TooltipReference {...copyTooltip} as={Button} onClick={copyToClipboard}>
        <CopyIcon decorative />
      </TooltipReference>
      <StyledSnippetTooltip {...copyTooltip}>
        Copy to clipboard
        <StyledSnippetTooltipArrow {...copyTooltip} />
      </StyledSnippetTooltip>
      {githubLink && (
        <>
          <TooltipReference
            {...githubTooltip}
            as="a"
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon decorative />
          </TooltipReference>
          <StyledSnippetTooltip {...githubTooltip}>
            Open code sample
            <StyledSnippetTooltipArrow {...githubTooltip} />
          </StyledSnippetTooltip>
        </>
      )}
    </StyledSnippetActions>
  );
};

export { SnippetActions };
