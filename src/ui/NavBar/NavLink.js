import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';

export const GatsbyLinkStyled = styled(Link)`
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

GatsbyLinkStyled.propTypes = {
  activeStyle: PropTypes.shape({
    borderTop: PropTypes.string,
    fontWeight: PropTypes.string,
    textShadow: PropTypes.string,
  }),
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

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
    <GatsbyLinkStyled
      activeStyle={
        !isResponsiveMenuOpen
          ? {
              borderTop: `4px solid ${theme &&
                theme.colors &&
                theme.colors.textColor}`,
              fontWeight: 'bold',
              textShadow: '0 0 1px black',
            }
          : {}
      }
      data-testid={testId}
      height={height}
      to={to}
      width={width}
    >
      {children}
    </GatsbyLinkStyled>
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
