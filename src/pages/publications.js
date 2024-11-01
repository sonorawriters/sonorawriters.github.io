import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import bookAd from "../images/website-ad.webp";

const Book = ({ data, location }) => {
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
        <i>When Rain Will Come</i> was released on November 1st, 2024. Grab your copy from the Lulu Bookstore today!
      </p>
      <button>
        <a href="https://www.lulu.com/shop/amylee-and-sara-dykman-and-blanche-abrams-and-kate-sills/when-rain-will-come/paperback/product-84n7ygd.html?page=1&pageSize=4">
          GET YOUR COPY
        </a>
      </button>
      <br />
      <p>
        <b>Editors</b>
        <br />
        Kate Sills
        <br />
        Blanche Abrams
        <br />
        Sara Dykman
        <br />
        AmyLee
        <br />
        <br />
        <b>Contributors</b>
        <br />
        Cyndie Zikmund
        <br />
        Creasie Jordan
        <br />
        Connie Corcoran
        <br />
        Lorance Harwood
        <br />
        ayreÁnna Ross
        <br />
        Kate Sills
        <br />
        Blanche Abrams
        <br />
        Claudia D. Day
        <br />
        John Accurso
        <br />
        Glenn Ditman
        <br />
        Sara Dykman
        <br />
        Nick Hugues
        <br />
        Linda Toren
        <br />
        Mary Innes
        <br />
        Jo DeEds
        <br />
        AmyLee
        <br />
        Laurel Leslie
        <br />
        Matt Peller
        <br />
        Obie Beukers
        <br />
      </p>

      <br />
      <h3>Prior Anthologies</h3>
      <p>
        In 2010, the Sonora Writers Group published a collection of short
        stories and poetry.{" "}
        <a href="https://www.amazon.com/Second-Saturday-Blanche-Abrams/dp/188940960X">
          The collection, titled Second Saturday, can be found on Amazon.
        </a>
      </p>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="When Rain Will Come: Poetry, Short Stories, Essays, and Art By the Sonora Writers Group" />
);

export default Book;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
