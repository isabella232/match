import * as React from "react";
import * as PropTypes from "prop-types";
import { TooltipReference, useTooltipState } from "reakit/Tooltip";
import { Button } from "reakit/Button";
import { SnippetVariant } from "./types";
import type { SnippetActionsProps } from "./types";
import {
  StyledSnippetActions,
  StyledTooltip,
  StyledTooltipArrow,
  StyledCopySuccess,
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
  const [isCopied, setIsCopied] = React.useState(false);
  const successRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (isCopied && successRef.current) successRef.current.focus();
  }, [isCopied]);

  const copyToClipboard = () => {
    if (!navigator || !navigator.clipboard) return;
    navigator.clipboard
      .writeText(code)
      .then(() => {
        setIsCopied(true);
        return copyTooltip.hide();
      })
      .catch(() => setIsCopied(false));
  };

  return (
    <StyledSnippetActions variant={variant}>
      {isCopied ? (
        <StyledCopySuccess
          ref={successRef}
          tabIndex={-1}
          onBlur={() => setIsCopied(false)}
        >
          Copied
        </StyledCopySuccess>
      ) : (
        <>
          <TooltipReference
            {...copyTooltip}
            as={Button}
            onClick={copyToClipboard}
          >
            <CopyIcon decorative />
          </TooltipReference>
          <StyledTooltip {...copyTooltip}>
            {isCopied ? "Copied" : "Copy to clipboard"}
            <StyledTooltipArrow {...copyTooltip} />
          </StyledTooltip>
        </>
      )}
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

export { SnippetActions };
