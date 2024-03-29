const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const putTogetherPages = async ({
  args,
  templateLocation,
  sourceInstanceName,
}) => {
  const {
    actions: { createPage },
    graphql,
    reporter,
  } = args;
  const template = path.resolve(templateLocation);

  // Get all markdown sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: {collection: { eq: "${sourceInstanceName}" } } }
        sort: { frontmatter: { date: ASC } }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
            collection
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your ${sourceInstanceName}`,
      result.errors
    );
    return;
  }

  const items = result.data.allMarkdownRemark.nodes;

  // Create pages for items
  // But only if there's at least one markdown file found at the location (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (items.length > 0) {
    items.forEach((item, index) => {
      const previousItemId = index === 0 ? null : items[index - 1].id;
      const nextItemId =
        index === items.length - 1 ? null : items[index + 1].id;

      createPage({
        path: item.fields.slug,
        component: template,
        context: {
          id: item.id,
          previousItemId,
          nextItemId,
        },
      });
    });
  }
};

exports.createPages = async (args) => {
  await putTogetherPages({
    args,
    templateLocation: `./src/templates/blog-post.js`,
    sourceInstanceName: `events`,
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    const collectionName = getNode(node.parent).sourceInstanceName;

    createNodeField({
      name: `slug`,
      node,
      value: `/${collectionName}${value}`,
    });

    createNodeField({
      name: `collection`,
      node,
      value: collectionName,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      email: String
      facebook: String
      youtube: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      collection: String
    }
  `);
};
