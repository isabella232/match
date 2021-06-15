import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from "html-react-parser";
import * as PropTypes from "prop-types";
import * as React from "react";
import { Anchor, AnchorVariant } from "../anchor";
import { Code } from "../code";
import { Heading, HeadingVariant } from "../heading";
import { Paragraph } from "../paragraph";
import { Separator, SeparatorVariant } from "../separator";
import { List, ListItem, ListVariant } from "../list";
import type { RichTextProps } from "./types";

export const RichText: React.FC<RichTextProps> = ({ children, inverse }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      const element = domNode as Element;
      if (element.attribs) {
        const { children, attribs } = element;
        const name = element.name.toUpperCase();
        switch (name) {
          case "A":
            return (
              <Anchor
                href={attribs.href}
                variant={inverse ? AnchorVariant.INVERSE : undefined}
              >
                {domToReact(children, options)}
              </Anchor>
            );
          case "CODE":
            return <Code>{domToReact(children, options)}</Code>;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
            return (
              <Heading
                variant={HeadingVariant[name]}
                inverse={Boolean(inverse)}
              >
                {domToReact(children, options)}
              </Heading>
            );

          case "HR":
            return (
              <Separator
                variant={inverse ? SeparatorVariant.INVERSE : undefined}
              />
            );
          case "P":
            return (
              <Paragraph color={inverse ? "inversePrimary" : undefined}>
                {domToReact(children, options)}
              </Paragraph>
            );
          case "OL":
            return (
              <List inverse={inverse} variant={ListVariant.NUMBERED}>
                {domToReact(children, options)}
              </List>
            );
          case "UL":
            return (
              <List inverse={inverse} variant={ListVariant.BULLETED}>
                {domToReact(children, options)}
              </List>
            );
          case "LI":
            return <ListItem>{domToReact(children, options)}</ListItem>;
        }
      }
    },
  };
  return <div>{parse(children, options)}</div>;
};

RichText.displayName = "RichText";

RichText.propTypes = {
  children: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
};
