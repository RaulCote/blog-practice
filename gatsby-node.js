/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                template
                title
                tags
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create Blog Pages
  const posts = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'post'
  );

  const work = result.data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'work'
  );

  const blogPost = path.resolve(`./src/templates/blog-post.js`);

  posts.forEach((post, index) => {
    const previousBlogPost =
      index === posts.length - 1 ? null : posts[index + 1].node;
    const nextBlogPost = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previousBlogPost,
        nextBlogPost,
      },
    });
  });

  const workPost = path.resolve(`./src/templates/work.js`);

  work.forEach(work => {
    createPage({
      path: work.node.fields.slug,
      component: workPost,
      context: {
        slug: work.node.fields.slug,
      },
    });
  });

  // Tab pages

  let tags = [];

  posts.forEach(edge => {
    if (_.get(edge, `node.frontmatter.tags`)) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  // Eliminate duplicate tags
  tags = _.uniq(tags);

  // Make Tags pages
  tags.forEach(tag => {
    const tagPath = `/tags/${_.kebabCase(tag)}/`;
    const tagsPage = path.resolve(`./src/templates/tags.js`);

    createPage({
      path: tagPath,
      component: tagsPage,
      context: {
        tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
