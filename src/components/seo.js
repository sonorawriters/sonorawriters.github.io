import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ description, title, pathname, children }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          author {
            name
          }
        }
      }
    }
  `);

  const siteData = site.siteMetadata;

  const seo = {
    title: title || siteData.title,
    author: siteData.author.name,
    description: description || siteData.description,
    image: `${siteData.siteUrl}${siteData.image}`,
    url: `${siteData.siteUrl}${pathname || ``}`,
  };

  return (
    <>
      <html lang="en-US" />
      <title>{seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="author" content={seo.author} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-16x16.png"
        sizes="16x16"
      ></link>
      <link
        rel="icon"
        type="image/png"
        href="/favicon/favicon-32x32.png"
        sizes="32x32"
      ></link>
      {children}
    </>
  );
};

export default Seo;
