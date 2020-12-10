import * as React from "react";

export enum SnippetVariant {
  DARK = "dark",
  LIGHT = "light",
}

export enum SnippetLanguage {
  JAVASCRIPT = "javascript",
  CSHARP = "csharp",
  PHP = "php",
  RUBY = "ruby",
  PYTHON = "python",
  JAVA = "java",
  JSON = "json",
  C = "c",
  BASH = "bash",
  SHELL = "shell-session",
  GO = "go",
  GROOVY = "groovy",
}

export interface SnippetProps {
  children: string;
  variant?: SnippetVariant;
  language: SnippetLanguage;
  title?: string;
  githubLink?: string;
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  isGrouped?: boolean;
}

export interface SnippetActionsProps {
  code: string;
  githubLink?: string;
  variant?: SnippetVariant;
}

export interface SnippetGroupProps {
  variant?: SnippetVariant;
  children: React.ReactElement<SnippetProps>[];
  title?: string;
}

export interface SnippetSelectorProps {
  children: React.ReactElement<SnippetGroupProps>[];
}

export interface StyledSnippetProps {
  variant?: SnippetVariant;
  isSingleLine: boolean;
  verticalScrollPos?: string;
}
