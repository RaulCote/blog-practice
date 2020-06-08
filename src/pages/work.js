import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const WorkPage = ({}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout>
      <SEO title={'Work'} />
      <main>
        <h1>Work</h1>
        <p>This is the work page.</p>
      </main>
    </Layout>
  );
};

export default WorkPage;
