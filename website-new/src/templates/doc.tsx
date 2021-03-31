import { graphql } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout";
import { Section } from "../components/section";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { Layout } from "../components/layout";
import { Section } from "../components/section";
import { mdxContent } from "./doc.module.css";

export const pageQuery = graphql`
  query DocPageQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
      }
      body
      tableOfContents
    }
  }
`;

export default function Page({ data: { mdx } }) {
  return (
    <Layout>
      <Section columns={10} contentClassName={mdxContent}>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </Section>
    </Layout>
  );
}
