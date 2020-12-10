import * as React from "react";
import * as PropTypes from "prop-types";
import { useTabState, Tab, TabList, TabPanel } from "reakit/Tab";
import type { SnippetGroupProps, SnippetProps } from "./types";
import { SnippetVariant } from "./types";
import { StyledSnippetGroup, StyledSnippetHeader } from "./styles";
import { SnippetActions } from "./snippet-actions";

const SnippetGroup: React.FC<SnippetGroupProps> = ({ variant, children }) => {
  const tab = useTabState();
  const snippetTabs = React.Children.toArray(children);
  const [code, setCode] = React.useState(snippetTabs[0].props.children);
  const [githubLink, setGithubLink] = React.useState(
    snippetTabs[0].props.githubLink
  );

  React.useEffect(() => {
    if (!tab.selectedId) return;
    const activeTab = snippetTabs.find(
      (snippetTab) => snippetTab.key === tab.selectedId
    );
    if (!activeTab) return;
    setCode(activeTab.props.children);
    setGithubLink(activeTab.props.githubLink);
  }, [tab.selectedId]);

  return (
    <StyledSnippetGroup>
      <StyledSnippetHeader variant={variant}>
        <TabList {...tab} aria-label="Languages">
          {snippetTabs.map(({ key, props: { language } }) => (
            <Tab {...tab} id={key} key={key}>
              {language}
            </Tab>
          ))}
        </TabList>
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
};

SnippetGroup.defaultProps = {
  variant: SnippetVariant.DARK,
};

SnippetGroup.displayName = "SnippetGroup";

export { SnippetGroup };
