import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import About from "../components/about";
import bookAd from "../images/website-ad.webp";

const HomePage = ({ location, data }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  return (
    <Layout location={location} title={siteTitle}>
            <img width="100%" src={bookAd}></img>
      <h1>When Rain Will Come</h1>
      <p>
        When Rain Will Come is a collection of poetry, short stories, essays and
        art, written and published entirely by the Sonora Writers Group.
      </p>
      <p>
        It will be released in November 2024. Sign up below to get an email
        notification when the book is released.
      </p>
      <button>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdY0KD0ad2c8dJJqeMiVqi_8gsLpkI8utnFxs1VmVJ9Sjqexw/viewform?usp=sf_link">
          GET NOTIFIED
        </a>
      </button>
      <br />
      <About></About>
    </Layout>
  );
};

export const Head = () => <Seo title="About the Sonora Writers Group" />;

export default HomePage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
