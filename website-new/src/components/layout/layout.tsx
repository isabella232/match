import * as React from "react";
import { MatchProvider } from "../../context/match";
import "@twilio-labs/match-fonts";
import "@twilio-labs/match-tokens/twilio/variables.css";
import "./variables.css";
import "./global.css";
import { Violator } from "../violator";
import { Header } from "../header";
import { Footer } from "../footer";
import { Navigation } from "../navigation";
import { layout, mainContent } from "./layout.module.css";

export const Layout: React.FC = ({ children }) => (
  <MatchProvider>
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
  </MatchProvider>
);
