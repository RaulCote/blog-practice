import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const PostLinkStyled = styled.h3`
  font-family: Roboto Slab, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  color: ${props => props.theme.colors.titles};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const PostLink = ({ children, to }) => (
  <PostLinkStyled>
    <StyledLink to={to}>{children}</StyledLink>
  </PostLinkStyled>
);

PostLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default PostLink;
