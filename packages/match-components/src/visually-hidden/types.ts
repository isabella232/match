export type asTags =
  | "span"
  | "div"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "thead"
  | "tr"
  | "th";

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLElement> {
  as?: asTags;
}
