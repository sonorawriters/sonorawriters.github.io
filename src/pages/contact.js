import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const ContactPage = ({ location, data }) => {
  const social = data.site.siteMetadata?.social;

  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
      <h1>Contact Us</h1>
      <p>
        Questions? Email Kate Sills at
        katelynsills@gmail.com.
      </p>
      <p>
        You can also find us on
        {` `}
        <a href={`https://www.facebook.com${social?.facebook || ``}`}>
          Facebook
        </a>
        {` `}
        and
        {` `}
        <a href={`https://youtube.com${social?.youtube || ``}`}>Youtube</a>.
      </p>
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title="Contact the Sonora Writers Group" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
          email
          youtube
          facebook
        }
      }
    }
  }
`;
