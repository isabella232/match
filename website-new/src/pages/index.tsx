import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "../components/layout";
import { Button } from "@twilio-labs/match-components";
import { Example } from "../components/example";

const Home: React.FC = () => (
  <Layout>
    <h1>Welcome to Match!</h1>
    <div>
      <div>
        <p>Here's an example of a Match component:</p>
        <Button>Click me!</Button>
      </div>
      <div>
        <p>Here's an example of a Match Docs component:</p>
        <Example>Example</Example>
      </div>
    </div>
    <p>
      Docs can be found <Link to="/docs">here</Link>.
    </p>
  </Layout>
);

export default Home;
