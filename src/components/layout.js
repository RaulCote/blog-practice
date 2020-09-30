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
  const [theme, setTheme] = React.useState(() => {
    const themeStored = appIsLiveOnBrowser ? window.__theme : 'light';

    return themeStored;
  });

  React.useLayoutEffect(() => {
    window.__setPreferedTheme = value => {
      localStorage.setItem('theme', `${value}`);
      setTheme(value);
    };
  }, []);

  React.useEffect(() => {
    if (
      typeof window !== undefined &&
      typeof window !== 'undefined' &&
      document.body.classList[0] === 'dark'
    ) {
      window.__setPreferedTheme('dark');
      document.body.classList.remove('dark');
    }

    setMounted(1);
  }, []);

  const currentTheme =
    (!mounted && appIsLiveOnBrowser && document.body.classList[0] === 'dark') ||
    theme === 'dark'
      ? darkTheme
      : lightTheme;

  const toggleMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    appIsLiveOnBrowser && window.__setPreferedTheme(newTheme);
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
          <footer>{/* do I need a footer ? */}</footer>
        </div>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
