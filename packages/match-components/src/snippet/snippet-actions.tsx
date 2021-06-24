import * as PropTypes from "prop-types";
import * as React from "react";
import { Button } from "reakit/Button";
import { TooltipReference, useTooltipState } from "reakit/Tooltip";
import { SnippetVariant } from "./constants";
import { CopyIcon } from "./copy-icon";
import { GithubIcon } from "./github-icon";
import {
  StyledSnippetActions,
  StyledTooltip,
  StyledTooltipArrow,
} from "./styles";
import type { SnippetActionsProps } from "./types";

export const SnippetActions: React.FC<SnippetActionsProps> = ({
  code,
  githubLink,
  variant,
}) => {
  const copyTooltip = useTooltipState();
  const githubTooltip = useTooltipState();
  const [copyMessage, setCopyMessage] = React.useState("");

  const copyToClipboard = () => {
    return navigator.clipboard
      .writeText(code)
      .then(() => setCopyMessage("Copied"))
      .catch(() => setCopyMessage("Unable to copy"))
      .finally(() => copyTooltip.hide());
  };

  React.useEffect(() => {
    if (copyMessage && !copyTooltip.visible) copyTooltip.show();
  }, [copyMessage, copyTooltip]);

  return (
    <StyledSnippetActions variant={variant}>
      <TooltipReference
        {...copyTooltip}
        as={Button}
        onClick={copyToClipboard}
        onMouseLeave={() => setCopyMessage("")}
        onBlur={() => setCopyMessage("")}
        aria-labelledby={copyTooltip.baseId}
      >
        <CopyIcon />
      </TooltipReference>
      <StyledTooltip success={copyMessage === "Copied"} {...copyTooltip}>
        <span>{copyMessage ? copyMessage : "Copy to clipboard"}</span>
        <StyledTooltipArrow {...copyTooltip} />
      </StyledTooltip>
      {githubLink && (
        <>
          <TooltipReference
            {...githubTooltip}
            as="a"
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-labelledby={githubTooltip.baseId}
          >
            <GithubIcon />
          </TooltipReference>
          <StyledTooltip {...githubTooltip}>
            Open code sample
            <StyledTooltipArrow {...githubTooltip} />
          </StyledTooltip>
        </>
      )}
    </StyledSnippetActions>
  );
};

SnippetActions.propTypes = {
  variant: PropTypes.oneOf(Object.values(SnippetVariant)),
  code: PropTypes.string.isRequired,
  githubLink: PropTypes.string,
};
