import * as React from "react";
import { parseDocument, DomUtils } from "htmlparser2";
import { Heading, HeadingVariant, Anchor, Separator } from "..";
import { RTFProps } from "./types";
import { useCallback } from "react";
import type { Node } from "domhandler";

const RTF: React.FC<RTFProps> = (props) => {
  const { children } = props;
  const _parseDocument = useCallback(() => {
    return parseDocument(children as string, {
      withStartIndices: true,
      withEndIndices: true,
    });
  }, [children]);
  const parsedDocument = _parseDocument();
  console.log(parsedDocument);

  const parseNode = (node: Node) => {
    const result: React.ReactNode[] = [];
    if (DomUtils.isText(node)) {
      result.push(node.data);
      return result;
    }
    "asd".substr;
    if (DomUtils.isTag(node)) {
      switch (node.name) {
        case "h1":
          result.push(
            <Heading variant={HeadingVariant.H1}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "h2":
          result.push(
            <Heading variant={HeadingVariant.H2}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "h3":
          result.push(
            <Heading variant={HeadingVariant.H3}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "h4":
          result.push(
            <Heading variant={HeadingVariant.H4}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "h5":
          result.push(
            <Heading variant={HeadingVariant.H5}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "h6":
          result.push(
            <Heading variant={HeadingVariant.H6}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Heading>
          );
          break;
        case "a":
          result.push(
            <Anchor href={node.attribs.href}>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </Anchor>
          );
          break;
        case "hr":
          result.push(<Separator />);
          break;
        case "p":
          result.push(
            <p>{node.children.map((nodeChild) => parseNode(nodeChild))}</p>
          );
          break;
        case "strong":
          result.push(
            <strong>
              {node.children.map((nodeChild) => parseNode(nodeChild))}
            </strong>
          );
          break;

        default:
          result.push(
            <span
              dangerouslySetInnerHTML={{
                __html: (children as string).slice(
                  node.startIndex as number,
                  (node.endIndex as number) + 1
                ),
              }}
            ></span>
          );
          break;
      }
    }
    return result;
  };

  const result: React.ReactNode[] = [];

  parsedDocument.children.forEach((child) => {
    result.push(parseNode(child));
  });
  return <div>{result}</div>;
};

RTF.propTypes = {};

RTF.displayName = "RTF";

RTF.defaultProps = {};

export { RTF };
export type { RTFProps };
