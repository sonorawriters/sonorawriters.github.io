import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/about";

const AboutPage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <About></About>
    </Layout>
  );
};

export const Head = () => <Seo title="About the Sonora Writers Group" />;

export default AboutPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

console.log("Sonora Writers Group");
