import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';

export const LinkRipple = styled(Link)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  cursor: pointer;
  height: ${props => props.height};
  outline: none;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  width: ${props => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid transparent;
  transition-duration: 0.2s;

  &:hover {
    background-color: #e4e6e9;
  }

  &:active {
    background-color: #d7eaef;
  }
`;

const NavLink = ({ to, width, height, children, testId }) => {
  const theme = useContext(ThemeContext);

  return (
    <LinkRipple
      to={to}
      activeStyle={{
        borderTop: `3px solid ${theme &&
          theme.colors &&
          theme.colors.textColor}`,
        textShadow: '0 0 1px black',
      }}
      width={width}
      height={height}
      data-testid={testId}
    >
      {children}
    </LinkRipple>
  );
};

NavLink.defaultProps = {
  width: '100%',
  height: '100%',
};
export default NavLink;
