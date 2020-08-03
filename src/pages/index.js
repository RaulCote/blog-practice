import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PostLink from '../ui/post-link';

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
              readingTime {
                text
              }
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

  console.log('blogPosts::::: ', blogPosts);

  return (
    <Layout>
      <SEO title={'Home'} />
      <section>
        {blogPosts.map(({ node }) => {
          const {
            fields: {
              slug,
              readingTime: { text: displayReadingTime },
            },
            frontmatter: { date, title },
            excerpt,
          } = node;

          return (
            <article key={slug} css={'margin-bottom: 3em'}>
              <header>
                <PostLink to={slug}>{title}</PostLink>
                <span css={'font-size: 0.85em; font-weight: bold'}>{date}</span>
                <span css={'font-size: 0.85em; font-weight: bold'}> - </span>
                <span css={'font-size: 0.85em; font-weight: bold'}>
                  {displayReadingTime}
                </span>
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
