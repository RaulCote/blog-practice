import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NavLink from '../ui/nav-link';

const Nav = styled.nav`
  height: 8vh;
`;

const NavLinksContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  // box-shadow: 0 0 3px 1px ${props => props.theme.colors.shadowColor};
  @media screen and (max-width: 600px) {
    width: 0%;
    height: 100vh;
    transition-duration: 0.2s;
    display: flex;
    flex-direction: column;

    a {
      color: transparent;
      display: none;
    }

    ${props =>
      props.responsive &&
      css`
        border-top: 4px solid ${props => props.theme.colors.textColor};
        position: relative;
        height: 100vh;
        box-shadow: 0 0 3px 1px ${props => props.theme.colors.shadowColor};
        width: 80%;
        z-index: 1;

        a {
          display: flex;
          color: ${props => props.theme.colors.textColor};
          font-weight: bold;
          padding-left: 5rem;
          justify-content: flex-start;
        }
      `}
  }

  height: 8vh;
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  // height: 8vh;
  color: ${props => props.theme.colors.textColor};
`;

const NavBar = ({ siteTitle }) => {
  const [isMenuOpen, setToggleNavBar] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');

    if (isMenuOpen) {
      body.style['overflow-y'] = 'hidden';
    } else {
      body.style['overflow-y'] = 'scroll';
    }
  }, [isMenuOpen]);

  return (
    <Nav>
      <BurguerMenu
        setToggleNavBar={() => setToggleNavBar(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <NavLinksContainer responsive={isMenuOpen}>
        <NavLink to="/" responsive={isMenuOpen}>
          {siteTitle}
        </NavLink>
        <NavLink to={'/about'} responsive={isMenuOpen}>
          About
        </NavLink>
        <NavLink to={'/work'} responsive={isMenuOpen}>
          Work
        </NavLink>
      </NavLinksContainer>
    </Nav>
  );
};

NavBar.propTypes = {
  siteTitle: PropTypes.string,
};

NavBar.defaultProps = {
  siteTitle: ``,
};

const BurguerIcon = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;

    input {
      display: none;
    }

    label {
      cursor: pointer;
      width: 100%;
      height: 100%;
      padding: 21px 21px;
    }

    #burguer-bar {
      width: 22px;
      margin: 6px 0px;
      height: 2px;
      background-color: ${props => props.theme.colors.textColor};
      transition: transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        color 1s cubic-bezier(0.23, 1, 0.32, 1);
      top: 50%;
      left: 50%;
      -webkit-transition: -webkit-transform 1s cubic-bezier(0.23, 1, 0.32, 1),
        color 1s cubic-bezier(0.23, 1, 0.32, 1);
      -webkit-transform: translateY(-3.75px) translateZ(0);
      transform: translateY(-3.75px) translateZ(0);
      &:last-child {
        -webkit-transform: translateY(3.75px) translateZ(0);
        transform: translateY(3.75px) translateZ(0);
      }
    }

    input:checked + label {
      #burguer-bar {
        transform: rotate(45deg) translateZ(0);
        top: 60%;
        position: absolute;
        &:last-child {
          transform: rotate(-45deg) translateZ(0);
          top: 60%;
          position: absolute;
        }
      }
    }
  }
`;

const BurguerMenu = ({ isMenuOpen, setToggleNavBar }) => (
  <BurguerIcon>
    <input
      type={'checkbox'}
      id={'burguer-check'}
      checked={isMenuOpen}
      onChange={setToggleNavBar}
    />
    <label for={'burguer-check'}>
      <div id={'burguer-bar'} />
      <div id={'burguer-bar'} />
    </label>
  </BurguerIcon>
);

export default NavBar;
