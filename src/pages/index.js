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
      <button>
        <a href="https://www.lulu.com/shop/amylee-and-sara-dykman-and-blanche-abrams-and-kate-sills/when-rain-will-come/paperback/product-84n7ygd.html?page=1&pageSize=4">
          BUY NOW
        </a>
      </button>
      <h1>When Rain Will Come</h1>
      <p>
        Whether you crave the piercing insight of a personal essay, the allure
        of a well-told tale, eye-catching illustrations, or the timeless beauty
        of poetry, <i>When Rain Will Come</i> offers a journey through both the
        ordinary and extraordinary as told by writers and poets of the
        California Gold Country. Perfect for readers who cherish deep reflection
        and literary exploration, this collection invites you to discover,
        reflect, and return again and again.
      </p>
      <p>
        <i>When Rain Will Come</i> was released on November 1st, 2024. Grab your
        copy from the Lulu Bookstore today!
      </p>
      <button>
        <a href="https://www.lulu.com/shop/amylee-and-sara-dykman-and-blanche-abrams-and-kate-sills/when-rain-will-come/paperback/product-84n7ygd.html?page=1&pageSize=4">
          GET YOUR COPY
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
