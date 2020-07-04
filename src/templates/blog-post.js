import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data }) => {
  console.log('BlogPostTemplate :::: Data ::::: data :::: ', data);

  const {
    html,
    frontmatter: { date, title },
  } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <date>{date}</date>
      <article dangerouslySetInnerHTML={{ __html: html }}></article>
    </Layout>
  );
};

export default BlogPostTemplate;

export const blogPostsBySlugQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
