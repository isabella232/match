import * as React from "react";
import * as PropTypes from "prop-types";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import javascript from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import csharp from "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import ruby from "react-syntax-highlighter/dist/esm/languages/prism/ruby";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import java from "react-syntax-highlighter/dist/esm/languages/prism/java";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import c from "react-syntax-highlighter/dist/esm/languages/prism/c";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import shell from "react-syntax-highlighter/dist/esm/languages/prism/shell-session";
import go from "react-syntax-highlighter/dist/esm/languages/prism/go";
import groovy from "react-syntax-highlighter/dist/esm/languages/prism/groovy";
import { SnippetActions } from "./snippet-actions";
import { SnippetLanguage, SnippetVariant } from "./types";
import type { SnippetProps } from "./types";
import {
  StyledSnippet,
  StyledSnippetHeader,
  StyledSnippetBody,
  StyledHighlighter,
} from "./styles";

SyntaxHighlighter.registerLanguage(SnippetLanguage.JAVASCRIPT, javascript);
SyntaxHighlighter.registerLanguage(SnippetLanguage.CSHARP, csharp);
SyntaxHighlighter.registerLanguage(SnippetLanguage.PHP, php);
SyntaxHighlighter.registerLanguage(SnippetLanguage.RUBY, ruby);
SyntaxHighlighter.registerLanguage(SnippetLanguage.PYTHON, python);
SyntaxHighlighter.registerLanguage(SnippetLanguage.JAVA, java);
SyntaxHighlighter.registerLanguage(SnippetLanguage.JSON, json);
SyntaxHighlighter.registerLanguage(SnippetLanguage.C, c);
SyntaxHighlighter.registerLanguage(SnippetLanguage.BASH, bash);
SyntaxHighlighter.registerLanguage(SnippetLanguage.SHELL, shell);
SyntaxHighlighter.registerLanguage(SnippetLanguage.GO, go);
SyntaxHighlighter.registerLanguage(SnippetLanguage.GROOVY, groovy);

const Snippet: React.FC<SnippetProps> = ({
  children,
  title,
  language,
  wrapLines,
  githubLink,
  isGrouped,
  variant,
  ...props
}) => {
  const [verticalScrollPos, setVerticalScrollPos] = React.useState("left");

  const isSingleLine = !/\r|\n/.test(children);
  const isShell = Boolean(language === SnippetLanguage.SHELL);
  const isBash = Boolean(language === SnippetLanguage.BASH);

  const handleScroll = (e: React.SyntheticEvent<HTMLDivElement>) => {
    if (e.currentTarget.scrollLeft === 0) {
      setVerticalScrollPos("left");
    } else if (
      e.currentTarget.scrollLeft ===
      e.currentTarget.scrollWidth - e.currentTarget.clientWidth
    ) {
      setVerticalScrollPos("right");
    } else {
      setVerticalScrollPos("middle");
    }
  };

  return (
    <StyledSnippet variant={variant} isSingleLine={isSingleLine}>
      {!isSingleLine && !isGrouped && (
        <StyledSnippetHeader variant={variant}>
          <div>{title ? title : language}</div>
          <SnippetActions code={children} githubLink={githubLink} />
        </StyledSnippetHeader>
      )}
      <StyledSnippetBody
        variant={variant}
        isSingleLine={isSingleLine}
        verticalScrollPos={verticalScrollPos}
      >
        <StyledHighlighter
          isSingleLine={isSingleLine}
          variant={variant}
          onScroll={isSingleLine ? handleScroll : undefined}
        >
          <SyntaxHighlighter
            {...props}
            language={language}
            showLineNumbers={!isShell && !isBash && props.showLineNumbers}
            wrapLongLines={wrapLines}
            useInlineStyles={false}
          >
            {isShell && isSingleLine && !children.startsWith("$")
              ? `$ ${children}`
              : children}
          </SyntaxHighlighter>
        </StyledHighlighter>
      </StyledSnippetBody>
      {isSingleLine && (
        <SnippetActions
          variant={variant}
          code={children}
          githubLink={githubLink}
        />
      )}
    </StyledSnippet>
  );
};

Snippet.propTypes = {
  variant: PropTypes.oneOf(Object.values(SnippetVariant)),
  language: PropTypes.oneOf(Object.values(SnippetLanguage)).isRequired,
  title: PropTypes.string,
  showLineNumbers: PropTypes.bool,
  wrapLines: PropTypes.bool,
};

Snippet.defaultProps = {
  variant: SnippetVariant.DARK,
  showLineNumbers: true,
  wrapLines: false,
};

Snippet.displayName = "Snippet";

export { Snippet };
