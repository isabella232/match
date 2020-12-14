import * as React from "react";
import * as PropTypes from "prop-types";
import { useTabState, TabPanel } from "reakit/Tab";
import { useUIDSeed } from "react-uid";
import type { SnippetGroupProps } from "./types";
import { SnippetVariant } from "./types";
import {
  StyledSnippetGroup,
  StyledSnippetHeader,
  StyledSnippetTitle,
  StyledTab,
  StyledTabList,
} from "./styles";
import { SnippetActions } from "./snippet-actions";

const SnippetGroup: React.FC<SnippetGroupProps> = ({
  title,
  variant,
  children,
}) => {
  const tab = useTabState();
  const seed = useUIDSeed();
  const [code, setCode] = React.useState("");
  const [githubLink, setGithubLink] = React.useState("");

  React.useEffect(() => {
    if (!tab.selectedId) return;
    const activeTab = React.Children.toArray(children).find(
      (child) =>
        React.isValidElement(child) &&
        tab.selectedId === seed(child.props.children)
    );
    if (!React.isValidElement(activeTab)) return;
    setCode(activeTab.props.children);
    setGithubLink(activeTab.props.githubLink);
  }, [tab.selectedId, children, seed]);

  return (
    <StyledSnippetGroup variant={variant}>
      <StyledSnippetHeader variant={variant}>
        {title && <StyledSnippetTitle>{title}</StyledSnippetTitle>}
        <StyledTabList {...tab} aria-label="Languages">
          {React.Children.map(
            children,
            ({ props: { language, children: code } }) => (
              <StyledTab {...tab} id={seed(code)}>
                {language}
              </StyledTab>
            )
          )}
        </StyledTabList>
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
  children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  variant: PropTypes.oneOf(Object.values(SnippetVariant)),
  title: PropTypes.string,
  compact: PropTypes.bool,
};

SnippetGroup.defaultProps = {
  variant: SnippetVariant.DARK,
  compact: false,
};

SnippetGroup.displayName = "SnippetGroup";

export { SnippetGroup };
