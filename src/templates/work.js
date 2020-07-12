import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPostTemplate = ({ data }) => {
  const {
    html,
    frontmatter: { date, title, link, description },
  } = data.markdownRemark;

  console.log('Work Post ::: data ::: ', data);

  return (
    <Layout>
      <SEO title={title} />
      <article>
        <h1>{title}</h1>
        <date>{date}</date>
        <a href={link}>{link}</a>
        <p dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default WorkPostTemplate;

export const workPostBySlugQuery = graphql`
  query WorkPostBySlug($slug: String!) {
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
        description
        category
        link
      }
    }
  }
`;
