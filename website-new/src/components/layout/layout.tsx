import * as React from "react";
import { MDXProvider } from "@mdx-js/react";
import "@twilio-labs/match-fonts";
import "@twilio-labs/match-tokens/twilio/variables.css";
import { MatchProvider } from "../../context/match";
import "./variables.css";
import "./global.css";
import { Violator } from "../violator";
import { Header } from "../header";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { Table } from "../markdown/table";
import { Code } from "../markdown/code";
import { layout, mainContent } from "./layout.module.css";

function getCodeChild(children: Array<React.ReactElement<any>>) {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length !== 1) return;
  const [firstChild] = childrenArray as Array<React.ReactElement<any>>;
  if (firstChild?.props?.mdxType !== "code") return;
  return firstChild;
}

export const Layout: React.FC = ({ children }) => (
  <MatchProvider>
    <MDXProvider
      components={{
        table: Table,
        pre: ({ children }) => {
          const codeChild = getCodeChild(children);
          return codeChild ? (
            <Code
              lang={
                codeChild.props.className &&
                codeChild.props.className.split("-")[1]
              }
              {...codeChild.props}
            />
          ) : (
            <pre>{children}</pre>
          );
        },
      }}
    >
      <div className={layout}>
        <Violator
          text="Beautiful and accessible UI components and patterns, crafted by the Match team. Check out the latest release: Radio Buttons!"
          url="#"
        />
        <Header />
        <Navigation />
        <main className={mainContent}>{children}</main>
        <Footer />
      </div>
    </MDXProvider>
  </MatchProvider>
);
