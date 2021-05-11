import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import * as React from "react";
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer";
import { Layout } from "../components/layout";
import { Section } from "../components/section";
import { PageHeader } from "../components/common/page-header";
import { mdxContent } from "./doc.module.css";

export const pageQuery = graphql`
  query DocPageQuery($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
        description
        slug
        figma
        github
      }
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData(width: 380)
          }
        }
      }
      body
    }
  }
`;

interface DocPageProps extends PageProps {
  data: {
    mdx: {
      fields: {
        title: string;
        description: string;
        figma: string;
        github: string;
      };
      frontmatter: {
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData;
          };
        };
      };
      body: string;
    };
  };
}

const DocPage: React.FC<DocPageProps> = ({
  location,
  data: {
    mdx: {
      fields: { title, description, figma, github },
      frontmatter: { image },
      body,
    },
  },
}) => {
  return (
    <Layout>
      <PageHeader
        pathname={location.pathname}
        title={title}
        description={description}
        figmaLink={figma}
        githubLink={github}
        gatsbyImage={image?.childImageSharp?.gatsbyImageData}
      />
      <Section columns={10} contentClassName={mdxContent}>
        <MDXRenderer>{body}</MDXRenderer>
      </Section>
    </Layout>
  );
};

export default DocPage;
