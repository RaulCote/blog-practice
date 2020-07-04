import React from 'react';
import { kebabCase } from 'lodash';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const TagsPage = () => {
  const data = useStaticQuery(graphql`
    query TagsQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `);

  const { group } = data.allMarkdownRemark;

  return (
    <Layout>
      <ul>
        {group.map(tag => (
          <li>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TagsPage;
