import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavLink from '../ui/NavBar/NavLink';
import BurguerMenu from '../ui/NavBar/BurguerMenu';
import NavLinksContainer from '../ui/NavBar/NavLinksContainer';
import ThemeToggler from './ThemeToggler';
import { MEDIA_QUERY_MOBILE_LIMIT } from '../ui/variables';
import NavBarResponsiveCloseOverlay from '../ui/NavBar/NavBarResponsiveCloseOverlay';

const Nav = styled.nav`
  ${MEDIA_QUERY_MOBILE_LIMIT} {
    height: 4em;
    margin-bottom: 2em;
  }

  height: 8vh;
  margin-bottom: 5%;
`;

const NavBar = ({ siteTitle, toggleMode }) => {
  const [isResponsiveMenuOpen, setToggleResponsiveMenu] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isResponsiveMenuOpen) {
      body.style['overflow-y'] = 'hidden';
    } else {
      body.style['overflow-y'] = 'scroll';
    }
  }, [isResponsiveMenuOpen]);

  const toggleResponsiveMenu = () => {
    setToggleResponsiveMenu(!isResponsiveMenuOpen);
  };

  return (
    <Nav>
      <BurguerMenu
        onToggle={toggleResponsiveMenu}
        isResponsiveMenuOpen={isResponsiveMenuOpen}
      />
      <NavLinksContainer isResponsiveMenuOpen={isResponsiveMenuOpen}>
        <NavLink to={'/'} isResponsiveMenuOpen={isResponsiveMenuOpen}>
          {siteTitle}
        </NavLink>
        <NavLink to={'/about'} isResponsiveMenuOpen={isResponsiveMenuOpen}>
          About
        </NavLink>
        <NavLink to={'/work'} isResponsiveMenuOpen={isResponsiveMenuOpen}>
          Work
        </NavLink>
      </NavLinksContainer>
      <ThemeToggler toggleMode={toggleMode} />

      <NavBarResponsiveCloseOverlay
        onClick={toggleResponsiveMenu}
        isResponsiveMenuOpen={isResponsiveMenuOpen}
      />
    </Nav>
  );
};

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: ``,
};

export default NavBar;
