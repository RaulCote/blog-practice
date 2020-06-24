import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../ui/body.js';
import NavLink from '../ui/nav-link';

const HeaderStyled = styled.header`
  background-color: ${props => props.theme.colors.background};
  // box-shadow: 0 0 3px 1px ${props => props.theme.colors.shadowColor};
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 8vh;
  color: ${props => props.theme.colors.textColor};
`;

const Header = ({ siteTitle, toggleMode, isDarkMode }) => {
  const toggleToolTip = isDarkMode
    ? 'Change to Light Theme'
    : 'Change to Dark Theme';

  return (
    <>
      {/* <GlobalStyle /> */}
      <HeaderStyled>
        <NavLink to="/">{siteTitle}</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/work'}>Work</NavLink>
      </HeaderStyled>
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
