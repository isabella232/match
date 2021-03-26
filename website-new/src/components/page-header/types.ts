export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  description?: string | Element;
  breadcrumbs?: Array<Element>;
}
