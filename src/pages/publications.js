import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  const iframeStyle = {
    border: "1px solid lightgray",
    width: "100%",
    height: "400px",
  };

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <h1>Publications</h1>
        <p>
          In 2010, the Sonora Writers Group published a collection of short
          stories and poetry.{" "}
          <a href="https://www.amazon.com/Second-Saturday-Blanche-Abrams/dp/188940960X">
            The collection, titled Second Saturday, can be found on Amazon.
          </a>
        </p>
        <h2>Prior Tuolumne County Literary Journals</h2>
        <p>Thanks to Richard Close, we were able to scan a few copies of Mindprint,
        a literary journal in Tuolumne County from the 1980s. Take a peek at the Summer 1985 edition below. (For the best reading experience, open up to full screen by clicking the rectangle in the top right hand
        corner.)</p>
        <br />
  
        <iframe
          allowfullscreen="allowfullscreen"
          scrolling="no"
          className="fp-iframe"
          style={iframeStyle}
          src="https://heyzine.com/flip-book/2347d2c3ac.html"
        ></iframe>
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <ol style={{ listStyle: `none` }}>
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug;

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />

                  <p>
                    <Link to={post.fields.slug} itemProp="url">
                      Read more
                    </Link>
                  </p>
                </section>
              </article>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export const Head = () => (
  <Seo title="Sonora Writers Group Short Stories and Poetry" />
);

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;
