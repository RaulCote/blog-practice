import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = ({}) => {
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
      <SEO title={'About'} />
      <main>
        <h1>About</h1>
        <p>This is the about page</p>
      </main>
    </Layout>
  );
};

export default AboutPage;
