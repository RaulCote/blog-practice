import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import { GlobalStyle } from '../ui/GlobalStyle';
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

  const [mounted, setMounted] = React.useState(0);
  const [isDarkMode, setDarkMode] = React.useState(() => {
    const themeStored = appIsLiveOnBrowser
      ? localStorage.getItem('isDarkMode')
      : false;

    return themeStored === 'true' ? true : false;
  });

  React.useEffect(() => {
    if (
      typeof window !== undefined &&
      typeof window !== 'undefined' &&
      document.body.classList[0] === 'dark'
    ) {
      document.body.classList.remove('dark');
      setDarkMode(true);
    }
    setMounted(1);
  }, []);

  const currentTheme =
    (!mounted && appIsLiveOnBrowser && document.body.classList[0] === 'dark') ||
    (mounted && isDarkMode)
      ? darkTheme
      : lightTheme;

  const toggleMode = () => {
    setDarkMode(!isDarkMode);

    if (appIsLiveOnBrowser) {
      localStorage.setItem('isDarkMode', `${!isDarkMode}`);
    }
  };

  return (
    <>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <NavBar
          siteTitle={data.site.siteMetadata.title}
          toggleMode={toggleMode}
          key={mounted}
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main key={mounted}>{children}</main>
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
