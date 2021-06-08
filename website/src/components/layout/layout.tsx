import { MDXProvider } from "@mdx-js/react";
import clsx from "clsx";
import * as React from "react";
import "@twilio-labs/match-tokens/twilio/variables.css";
import { MatchProvider } from "../../context/match";
import "./variables.css";
import "./global.css";
import { Footer } from "../footer";
import { Header } from "../header";
import { Code } from "../markdown/code";
import { Table } from "../markdown/table";
import { Navigation } from "../navigation";
import { Violator } from "../violator";
import {
  layout,
  footerContent,
  mainContent,
  navOpen,
} from "./layout.module.css";

function getCodeChild(children: Array<React.ReactElement<any>>) {
  const childrenArray = React.Children.toArray(children);
  if (childrenArray.length !== 1) return;
  const [firstChild] = childrenArray as Array<React.ReactElement<any>>;
  if (firstChild?.props?.mdxType !== "code") return;
  return firstChild;
}

export const Layout: React.FC = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const handleMenuClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  React.useEffect(() => {
    document.body.className = isNavOpen ? "noscroll" : "";
  });

  return (
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
        <div className={clsx(layout, isNavOpen && navOpen)}>
          <Violator
            text="Beautiful and accessible UI components and patterns, crafted by the Match team. Check out the latest release: Radio Buttons!"
            url="/components/radio-group"
          />
          <Header isNavOpen={isNavOpen} handleMenuClick={handleMenuClick} />
          <Navigation isOpen={isNavOpen} />
          <main className={mainContent}>{children}</main>
          <Footer className={footerContent} />
        </div>
      </MDXProvider>
    </MatchProvider>
  );
};
