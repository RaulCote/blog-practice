import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { template: { eq: "post" } } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              template
              title
              tags
              slug
            }
          }
        }
      }
    }
  `);

  console.log('IndexPage ::: data ::: ', data);

  const { edges: blogPosts } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title={'Home'} />
      <section>
        {blogPosts.map(({ node }) => {
          const {
            fields: { slug },
            frontmatter: { date, title },
            excerpt,
          } = node;

          return (
            <article key={slug}>
              <header>
                <h3>
                  <Link to={slug}>{title}</Link>
                </h3>
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

export default IndexPage;
