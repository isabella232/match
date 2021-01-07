import * as React from "react";
import parse, { domToReact, HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler/lib/node";
import { Heading, HeadingVariant, Anchor, Separator } from "..";
import { RTFProps } from "./types";

const options: HTMLReactParserOptions = {
  replace: (domNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      const { children, attribs } = domNode;
      const name = domNode.name.toUpperCase();
      switch (name) {
        case "H1":
        case "H2":
        case "H3":
        case "H4":
        case "H5":
        case "H6":
          return (
            <Heading variant={HeadingVariant[name]}>
              {domToReact(children, options)}
            </Heading>
          );
        case "A":
          return (
            <Anchor href={attribs.href}>{domToReact(children, options)}</Anchor>
          );
        case "HR":
          return <Separator />;
      }
    }
  },
};

const RTF: React.FC<RTFProps> = (props) => {
  const { children } = props;
  return <div>{parse(children, options)}</div>;
};

RTF.propTypes = {};

RTF.displayName = "RTF";

RTF.defaultProps = {};

export { RTF };
export type { RTFProps };
