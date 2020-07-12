import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    html,
    frontmatter: { date, title },
  } = data.markdownRemark;

  const { nextBlogPost, previousBlogPost } = pageContext;

  console.log(
    'Blog Post :::: data :::: ',
    data,
    ' page context :::: ',
    pageContext
  );

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        <date>{date}</date>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <nav>
        <ul>
          {previousBlogPost && (
            <li>
              <Link to={previousBlogPost.fields.slug} rel={'prev'}>
                ← {previousBlogPost.frontmatter.title}
              </Link>
            </li>
          )}
          {nextBlogPost && (
            <li>
              <Link to={nextBlogPost.fields.slug} rel={'next'}>
                {nextBlogPost.frontmatter.title} →
              </Link>
            </li>
          )}
        </ul>
      </nav>
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
