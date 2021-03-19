import { graphql } from "gatsby";
import * as React from "react";
import { Layout } from "../components/layout";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";

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
      <MDXRenderer>{mdx.body}</MDXRenderer>
    </Layout>
  );
}
