export interface SectionHeaderProps extends React.HTMLAttributes<HTMLElement> {
  tagline?: string;
  title: string;
  align?: "left" | "center";
}
