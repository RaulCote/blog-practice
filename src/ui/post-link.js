import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const StyledH3 = styled.h3`
  font-family: Roboto Slab, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.textColor};

  &:hover {
    text-decoration: underline;
  }
`;

const PostLink = ({ children, to }) => (
  <StyledH3>
    <StyledLink to={to}>{children}</StyledLink>
  </StyledH3>
);

export default PostLink;
