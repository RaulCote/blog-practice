import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../src/components/layout';
import * as Gatsby from 'gatsby';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

beforeEach(() => {
  useStaticQuery.mockImplementation(() => ({
    site: {
      siteMetadata: {
        title: 'Testing Layout',
      },
    },
  }));
});

describe(Layout, () => {
  it('renders correctly the title and children components', () => {
    const { getByTestId, getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );

    expect(getByTestId('layout-test')).toHaveTextContent('Welcome');
    expect(getByText('Testing Layout')).toHaveTextContent('Testing Layout');
  });
});
