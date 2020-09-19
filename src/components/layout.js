import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';
import { GlobalStyle } from '../ui/body';
// import { AppContainer } from '../ui/app-container';
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

  const [mounted, setMounted] = React.useState(false);
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

  React.useEffect(() => {
    // let react take care of dynamic styles
    // forceUpdate(1);
    if (
      typeof window !== undefined &&
      typeof window !== 'undefined' &&
      document.body.classList[0] === 'dark'
    ) {
      setMounted(true);
      // console.log(
      //   'what there are here before remove ::: dark is ::: ',
      //   document.body.classList[0] === 'dark'
      // );
      document.body.classList.remove('dark');
      // console.log(
      //   'what there are here ::: ',
      //   document.body.classList[0] === 'dark'
      // );
    }
  }, []);

  const currentTheme =
    !mounted && appIsLiveOnBrowser && document.body.classList[0] === 'dark'
      ? darkTheme
      : mounted && isDarkMode
      ? darkTheme
      : lightTheme;

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
