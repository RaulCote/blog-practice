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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  const posts = data.allMarkdownRemark.edges.filter(
    edge => edge.node.frontmatter.template === 'post'
  );

  console.log('IndexPage ::: data ::: ', data);
  return (
    <Layout>
      <SEO title={'Home'} />
      <section>
        {posts.map(({ node }) => {
          const {
            fields: { slug, date },
            frontmatter: { title },
            excerpt,
          } = node;

          const postTitle = title || slug;

          return (
            <article key={slug}>
              <header>
                <h3>
                  <Link to={slug}>{postTitle}</Link>
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
