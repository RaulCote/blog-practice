/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import NavBar from '../components/NavBar';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import { GlobalStyle } from '../ui/body';
import { AppContainer } from '../ui/appcontainer';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const appIsLiveOnBrowser = typeof window !== undefined;

  const [isDarkMode, setDarkMode] = React.useState(() => {
    if (appIsLiveOnBrowser) {
      const themeStored = localStorage.getItem('isDarkMode');
      return themeStored === 'true' ? true : false;
    }
  });

  React.useEffect(() => {
    if (appIsLiveOnBrowser) {
      localStorage.setItem('isDarkMode', `${isDarkMode}`);
    }
  }, [isDarkMode, appIsLiveOnBrowser]);

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleMode = () => setDarkMode(!isDarkMode);

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        {/* <GlobalStyle /> */}
        <AppContainer>
          <Header
            siteTitle={data.site.siteMetadata.title}
            toggleMode={toggleMode}
            isDarkMode={isDarkMode}
          />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode} />
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </AppContainer>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
