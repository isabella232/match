import * as React from "react";
import * as PropTypes from "prop-types";
import { useCombobox } from "downshift";
import { StyledCombobox, StyledSelect, StyledListbox } from "./styles";
import type { SelectProps, OptionProps } from "./types";

type Items = Array<React.ReactElement<OptionProps>>;

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
  ({ children, label, name }, ref) => {
    const [items, setItems] = React.useState(
      React.Children.toArray(children) as Items
    );

    const {
      isOpen,
      openMenu,
      getLabelProps,
      getToggleButtonProps,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      selectedItem,
      getItemProps,
    } = useCombobox({
      items: items.map((child) => child.props.value),
      onInputValueChange: ({ type, inputValue }) => {
        const allItems = React.Children.toArray(children) as Items;
        if (!inputValue || type !== useCombobox.stateChangeTypes.InputChange) {
          setItems(allItems);
        } else {
          setItems(
            allItems.filter((item) =>
              item.props.value
                .toLowerCase()
                .startsWith(inputValue.toLowerCase())
            )
          );
        }
      },
    });

    return (
      <StyledSelect>
        <label {...getLabelProps()}>{label}</label>
        <StyledCombobox {...getComboboxProps()}>
          <input
            ref={ref}
            {...getInputProps({
              name,
              placeholder: "Select One",
              onClick: () => openMenu(),
            })}
          />
          <button type="button" {...getToggleButtonProps()}>
            <span role="img" aria-label="dropdown">
              👇🏾
            </span>
          </button>
        </StyledCombobox>
        <StyledListbox {...getMenuProps()}>
          {isOpen &&
            items.map((child, index) =>
              React.cloneElement(child, {
                selected: Boolean(child.props.value === selectedItem),
                highlighted: Boolean(index === highlightedIndex),
                key: child.key || child.props.value,
                ...getItemProps({ item: child.props.value, index }),
              })
            )}
        </StyledListbox>
      </StyledSelect>
    );
  }
);

Select.displayName = "Select";

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: (props, propName, componentName) => {
    let error = null;
    React.Children.forEach(props[propName], (child) => {
      if (child.type.displayName !== "Option") {
        error = new Error(
          `[${componentName}]: invalid child element '${child.type.displayName}'`
        );
      }
    });
    return error;
  },
};
