import { MarginProps } from "@twilio-labs/match-props";

import { SnippetVariant, SnippetLanguage } from "./constants";

export interface SnippetProps extends MarginProps {
  children: string;
  variant?: `${SnippetVariant}`;
  language: `${SnippetLanguage}`;
  /** Filename or snippet name. */
  label?: string;
  /** Link to full GitHub or Gist source code. */
  githubLink?: string;
  /** Include line numbers in code block. */
  showLineNumbers?: boolean;
  /** Wraps long lines of code. */
  wrapLines?: boolean;
  /**
   * Set to true automatically when nested inside of SnippetGroup.
   * @ignore
   */
  isGrouped?: boolean;
  /** Constrains the height of code block to a set number of lines. */
  maxLines?: number;
}

export interface SnippetActionsProps {
  code: string;
  githubLink?: string;
  variant?: `${SnippetVariant}`;
}

export interface SnippetGroupProps extends MarginProps {
  variant?: `${SnippetVariant}`;
  children: Array<React.ReactElement<SnippetProps>>;
  /** File name or snippet name. */
  label?: string;
  /** Force mobile optimized layout for all breakpoints. */
  compact?: boolean;
}

export interface StyledSnippetGroupProps extends MarginProps {
  variant?: `${SnippetVariant}`;
  compact?: boolean;
  hasTitle?: boolean;
}

export interface StyledSnippetProps extends MarginProps {
  variant?: `${SnippetVariant}`;
  language?: `${SnippetLanguage}`;
  isSingleLine?: boolean;
  maxLines?: number;
  showLineNumbers?: boolean;
}

export interface StyledTooltipProps {
  success?: boolean;
}
