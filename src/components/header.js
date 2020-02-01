import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { ToggleThemeButton } from '../ui/themeToggleIcon';
import { GlobalStyle } from '../ui/body.js';

const Header = ({ siteTitle, toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  return (
    <>
      {/* <GlobalStyle /> */}
      <header
        style={{
          background: `rebeccapurple`,
          marginBottom: `1.45rem`,
          display: 'flex',
          justifyContent: 'spaceBetween',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
        </div>
        {/* <ToggleThemeButton */}
        {/*   onClick={toggleMode} */}
        {/*   title={toggleToolTip} */}
        {/* /> */}
      </header>
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
