import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Layout from '../../src/components/layout';
import * as Gatsby from 'gatsby';

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

describe('<Layout /> component tests', () => {
  beforeEach(() => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          title: 'Testing Layout',
        },
      },
    }));
  });

  afterEach(() => jest.clearAllMocks());

  it('renders correctly the title and children components', () => {
    const { getByTestId, getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );

    expect(getByTestId('layout-test')).toHaveTextContent('Welcome');
    expect(getByText('Testing Layout')).toBeInTheDocument();
  });

  it('renders the NavBar content', () => {
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );
    expect(getByTestId('ripple-button')).toHaveTextContent('Dark');
  });

  it('renders the footer', () => {
    const { getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );
    expect(getByText('Gatsby')).toHaveTextContent('Gatsby');
  });

  it('can toggle from light to dark mode', async () => {
    const { findByText, getByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );

    fireEvent.click(getByText('Dark'));
    expect(await findByText('Light')).toBeInTheDocument();
    fireEvent.click(getByText('Light'));
    expect(await findByText('Dark')).toBeInTheDocument();
  });

  it(`will show directly on dark mode if user set it previously
    in another visit`, async () => {
    window.localStorage.setItem('isDarkMode', true);

    const { findByText } = render(
      <Layout>
        <h1 data-testid={'layout-test'}>Welcome</h1>
      </Layout>
    );

    expect(await findByText('Light')).toBeInTheDocument();

    window.localStorage.removeItem('isDarkMode');
  });
});
