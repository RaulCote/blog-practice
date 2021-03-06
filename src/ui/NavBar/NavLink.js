import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import {
  MEDIA_QUERY_HOVER_SUPPORTED,
  MEDIA_QUERY_MOBILE_LIMIT,
} from '../variables';

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
  font-weight: 600;
  font-size: 1.1rem;

  ${MEDIA_QUERY_HOVER_SUPPORTED} {
    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.textColorHover};
      background-color: ${props => props.theme.colors.backgroundHover};
    }
  }

  ${MEDIA_QUERY_MOBILE_LIMIT} {
    &:active {
      background-color: ${props => props.theme.colors.backgroundHover};
    }
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
              borderTop: `4px solid ${theme.colors.titles}`,
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
