import * as React from "react";
import { MatchProvider } from "../../context/match";
import "@twilio-labs/match-fonts";
import "@twilio-labs/match-tokens/twilio/variables.css";
import { Header } from "../header";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { layout, mainContent } from "./layout.module.css";

export const Layout: React.FC = ({ children }) => (
  <MatchProvider>
    <div className={layout}>
      <Header />
      <Navigation />
      <main className={mainContent}>{children}</main>
      <Footer />
    </div>
  </MatchProvider>
);
