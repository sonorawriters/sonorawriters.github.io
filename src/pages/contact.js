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
      <p> Sign up using the form below to receive regular updates for the group.</p>
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
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfPAu5ekufYjh3eEgAbaUhfXLgljDTUFuKwemGkDGmQSjHYdQ/viewform?embedded=true" width="100%" height="1100" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
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
