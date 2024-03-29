import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <h1>404: Not Found</h1>
      <p>
        The page you tried to visit doesn't exist. Sorry about that! If you have
        a second, we would really appreciate you letting us know so we can fix
        it. Please email Kate at katelynsills@gmail.com.
      </p>
    </Layout>
  );
};

export const Head = () => <Seo title="404: Not Found" />;

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
