import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';

export const NavLinkStyled = styled(Link)`
  color: ${props => props.theme.colors.titles};
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
  font-weight: bold;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.textColorHover};
    background-color: ${props => props.theme.colors.backgroundHover};
  }

  &:active {
  }
`;

const NavLink = ({
  to,
  width,
  height,
  children,
  testId,
  isResponsiveMenuOpen,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <NavLinkStyled
      activeStyle={
        !isResponsiveMenuOpen
          ? {
              borderTop: `4px solid ${theme?.colors?.titles}`,
            }
          : {}
      }
      data-testid={testId}
      height={height}
      to={to}
      width={width}
    >
      {children}
    </NavLinkStyled>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  isResponsiveMenuOpen: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
  width: PropTypes.string,
};

NavLink.defaultProps = {
  width: '100%',
  height: '100%',
};

export default NavLink;
