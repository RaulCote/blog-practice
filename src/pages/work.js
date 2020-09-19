import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostLink from '../ui/PostLink';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "work" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              template
              title
              tags
              description
              slug
              category
              link
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  console.log('Work ::: data ::: ', data);

  const siteTitle = data.site.siteMetadata.title;
  const { edges: workPosts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title={'Work'} />
      <section>
        <h1>Work</h1>
        {workPosts.map(({ node }) => {
          const {
            fields: { slug },
            frontmatter: { date, title },
            excerpt,
          } = node;

          return (
            <article key={slug}>
              <header>
                <PostLink to={node.fields.slug}>{title}</PostLink>
                <date>{date}</date>
              </header>
              <p dangerouslySetInnerHTML={{ __html: excerpt }} />
            </article>
          );
        })}
      </section>
    </Layout>
  );
};

export default WorkPage;
