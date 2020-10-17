import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import NavFooterPost from '../ui/NavFooterPost';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { date, title },
    fields: {
      readingTime: { text: displayReadingTime },
    },
  } = data.markdownRemark;

  const { nextBlogPost, previousBlogPost } = pageContext;

  console.log(
    'Blog Post :::: data :::: ',
    data,
    ' page context :::: ',
    pageContext,
    'readingTime ::: ',
    displayReadingTime,
    'html :::: ',
    html
  );

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        <date>{date}</date>
        <h5>{displayReadingTime}</h5>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <NavFooterPost
        previousBlogPost={previousBlogPost}
        nextBlogPost={nextBlogPost}
      />
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
      fields {
        readingTime {
          text
        }
      }
    }
  }
`;
