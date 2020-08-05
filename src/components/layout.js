import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import { GlobalStyle } from '../ui/body';

import NavBar from './NavBar';
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

  const appIsLiveOnBrowser =
    typeof window !== undefined && typeof window !== 'undefined';

  const [isDarkMode, setDarkMode] = React.useState(() => {
    const themeStored = appIsLiveOnBrowser
      ? localStorage.getItem('isDarkMode')
      : false;

    return themeStored === 'true' ? true : false;
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
        <GlobalStyle />
        <NavBar
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
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
