import * as React from "react";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  description?: string | React.ReactElement;
  breadcrumbs?: Array<React.ReactElement>;
}
