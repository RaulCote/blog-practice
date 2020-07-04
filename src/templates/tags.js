import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TagsTemplate = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  const postLinks = posts.map(post => {
    const postAdress = post.node.fields.slug;
    const postTitle = post.node.frontmatter.title;

    console.log('post links in tags :::: ', post);
    console.log('metadata ::: ', data.site);

    return (
      <Link key={postAdress} to={postAdress}>
        {postTitle}
      </Link>
    );
  });

  return (
    <Layout>
      <article>{postLinks}</article>
    </Layout>
  );
};

export default TagsTemplate;

export const tagsPageQuery = graphql`
  query TagQuery($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            slug
            title
            date
            tags
          }
        }
      }
    }
  }
`;
