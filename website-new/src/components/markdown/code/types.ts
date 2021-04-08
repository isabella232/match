export interface CodeProps {
  children: string;
  lang: "jsx" | "tsx" | "bash";
  live?: boolean;
  bg?: "white" | "blue" | "darkest";
}

export interface PreviewProps {
  bg: "white" | "blue" | "darkest";
}
