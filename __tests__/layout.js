import React from 'react';
import { render } from '@testing-library/react';
import Layout from '../src/components/layout';
import * as Gatsby from 'gatsby';

jest.mock('gatsby');

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

describe('<Layout /> component tests', () => {
  it('renders correctly the title and children components', () => {
    const { getByTestId, getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );

    expect(getByTestId('layout-test')).toHaveTextContent('Welcome');
    expect(getByText('Testing Layout')).toHaveTextContent('Testing Layout');
  });

  it('renders the NavBar content', () => {
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );
    expect(getByTestId('ripple-button')).toHaveTextContent('Ripple');
  });

  it('renders the footer', () => {
    const { getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );
    expect(getByText('Gatsby')).toHaveTextContent('Gatsby');
  });
});
