import { IGatsbyImageData } from "gatsby-plugin-image";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string | React.ReactElement;
  pathname: string;
  githubLink?: string;
  figmaLink?: string;
  gatsbyImage?: IGatsbyImageData;
}

export type Crumb = {
  path: string;
  label: string;
};
