import * as React from "react";
import * as PropTypes from "prop-types";
import parse, {
  domToReact,
  HTMLReactParserOptions,
  Element,
} from "html-react-parser";
import {
  Anchor,
  AnchorVariant,
  Code,
  Heading,
  HeadingVariant,
  Paragraph,
  Separator,
  SeparatorVariant,
} from "..";
import { RichTextProps } from "./types";

export const RichText: React.FC<RichTextProps> = ({ children, inverse }) => {
  const options: HTMLReactParserOptions = {
    replace: (domNode: Element) => {
      if (domNode.attribs) {
        const { children, attribs } = domNode;
        const name = domNode.name.toUpperCase();
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
