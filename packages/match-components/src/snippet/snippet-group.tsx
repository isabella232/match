import * as PropTypes from "prop-types";
import * as React from "react";
import { useUIDSeed } from "react-uid";
import { useTabState, TabPanel } from "reakit/Tab";
import { marginPropTypes } from "@twilio-labs/match-props";
import { VisuallyHidden } from "../visually-hidden";
import { ChevronDownIcon } from "./chevron-down-icon";
import { SnippetVariant } from "./constants";
import { getLanguageNiceName } from "./get-language-nice-name";
import { SnippetActions } from "./snippet-actions";
import {
  StyledSnippetGroup,
  StyledSnippetHeader,
  StyledSnippetTitle,
  StyledSnippetSelect,
  StyledTab,
  StyledTabList,
} from "./styles";
import type { SnippetGroupProps } from "./types";

export const SnippetGroup: React.FC<SnippetGroupProps> = ({
  label,
  variant,
  children,
  compact,
  marginX,
  marginY,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  const tab = useTabState();
  const seed = useUIDSeed();
  const [code, setCode] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    tab.select(e.currentTarget.value);
  };

  React.useEffect(() => {
    if (!tab.selectedId) return;
    const activeTab = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) &&
        tab.selectedId === seed(child.props.language + child.props.label)
    );
    if (!React.isValidElement(activeTab)) return;
    setCode(activeTab.props.children);
    setGithubLink(activeTab.props.githubLink);
  }, [tab.selectedId, children, seed]);

  return (
    <StyledSnippetGroup
      variant={variant}
      compact={compact}
      hasTitle={Boolean(label)}
      marginX={marginX}
      marginY={marginY}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
    >
      <StyledSnippetHeader variant={variant}>
        {label && <StyledSnippetTitle>{label}</StyledSnippetTitle>}
        <StyledTabList {...tab} aria-label="Languages">
          {React.Children.map(children, ({ props: { label, language } }) => (
            <StyledTab {...tab} id={seed(language + label)}>
              {label ? label : getLanguageNiceName(language)}
            </StyledTab>
          ))}
        </StyledTabList>
        <StyledSnippetSelect>
          <VisuallyHidden>
            <label htmlFor={seed("language-select")}>Languages</label>
          </VisuallyHidden>
          <select
            value={tab.selectedId ? tab.selectedId : undefined}
            id={seed("language-select")}
            onChange={handleSelectChange}
          >
            {React.Children.map(children, ({ props: { label, language } }) => (
              <option value={seed(language + label)}>
                {label ? label : getLanguageNiceName(language)}
              </option>
            ))}
          </select>
          <ChevronDownIcon size="medium" />
        </StyledSnippetSelect>
        <SnippetActions variant={variant} code={code} githubLink={githubLink} />
      </StyledSnippetHeader>
      {React.Children.map(children, (child) => (
        <TabPanel {...tab} tabIndex={undefined}>
          {React.cloneElement(child, { isGrouped: true, variant })}
        </TabPanel>
      ))}
    </StyledSnippetGroup>
  );
};

SnippetGroup.propTypes = {
  ...marginPropTypes,
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  variant: PropTypes.oneOf(Object.values(SnippetVariant)),
  label: PropTypes.string,
  compact: PropTypes.bool,
};

SnippetGroup.defaultProps = {
  variant: SnippetVariant.DARK,
  compact: false,
};

SnippetGroup.displayName = "SnippetGroup";
