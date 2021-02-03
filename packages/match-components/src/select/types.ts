export interface OptionProps extends React.LiHTMLAttributes<HTMLLIElement> {
  value: string;
  highlighted?: boolean;
  selected?: boolean;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  children: Array<React.ReactElement<OptionProps>>;
}
