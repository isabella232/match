import * as React from "react";
import { Layout } from "../components/layout";
import { MeetMatch } from "../components/homepage/meet-match";
import { ComponentLibrary } from "../components/homepage/component-library";
import { Developers } from "../components/homepage/developers";
import { FigmaLibrary } from "../components/homepage/figma-library";
import { Resources } from "../components/homepage/resources";

const Home: React.FC = () => (
  <Layout>
    <MeetMatch />
    <ComponentLibrary />
    <Developers />
    <FigmaLibrary />
    <Resources />
  </Layout>
);

export default Home;
