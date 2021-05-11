export interface AccordionProps extends React.HTMLAttributes<HTMLUListElement> {
  /* Allow for each toggle to both open and close its section. Makes it possible for all sections to be closed. */
  allowToggle?: boolean;
  /* Allow for multiple accordion sections to be expanded at the same time. Assumes data-allow-toggle */
  allowMultiple?: boolean;
}

export interface AccordionGroupProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  /* Label for the group */
  heading: string;
  allowToggle?: boolean;
  expanded?: Array<string>;
  handleClick?: (key: string) => void;
  icon?: string;
}

export interface AccordionItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {
  url?: string;
}
