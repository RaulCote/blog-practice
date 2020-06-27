import React, { useContext } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { Link } from 'gatsby';

export const LinkStyled = styled(Link)`
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
  border-top: 4px solid transparent;
  transition-duration: 0.2s;

  &:hover {
    background-color: #e4e6e9;
  }

  &:active {
    background-color: #d7eaef;
  }
`;

const NavLink = ({ to, width, height, children, testId, responsive }) => {
  const theme = useContext(ThemeContext);

  return (
    <LinkStyled
      activeStyle={
        !responsive && {
          borderTop: `4px solid ${theme &&
            theme.colors &&
            theme.colors.textColor}`,
          fontWeight: 'bold',
          textShadow: '0 0 1px black',
        }
      }
      data-testid={testId}
      height={height}
      to={to}
      width={width}
    >
      {children}
    </LinkStyled>
  );
};

NavLink.defaultProps = {
  width: '100%',
  height: '100%',
};
export default NavLink;
