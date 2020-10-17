import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import {
  MEDIA_QUERY_HOVER_SUPPORTED,
  MEDIA_QUERY_MOBILE_FROM,
  MEDIA_QUERY_MOBILE_LIMIT,
} from './variables';

const NavFooterStyled = styled.nav`
  margin-top: 15rem;

  ul {
    ${MEDIA_QUERY_MOBILE_FROM} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const NavFooterPost = ({ previousBlogPost, nextBlogPost }) => (
  <NavFooterStyled>
    <ul>
      {previousBlogPost && (
        <LinkFooterPost to={previousBlogPost.fields.slug} rel={'prev'}>
          ← {previousBlogPost.frontmatter.title}
        </LinkFooterPost>
      )}

      {nextBlogPost && (
        <LinkFooterPost to={nextBlogPost.fields.slug} rel={'next'}>
          {nextBlogPost.frontmatter.title} →
        </LinkFooterPost>
      )}
    </ul>
  </NavFooterStyled>
);

const LinkFooterStyled = styled.li`
  list-style-type: none;
  display: block;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.colors.textColor};
    padding: 20px 20px;
    ${MEDIA_QUERY_MOBILE_LIMIT} {
      display: block;
      width: 100%;

      &:active {
        background-color: ${props => props.theme.colors.backgroundHover};
      }
    }

    ${MEDIA_QUERY_MOBILE_FROM} {
      width: 40%;
      text-align: center;
      transition-duration: 0.2s;

      &:hover {
        background-color: ${props => props.theme.colors.backgroundHover};
      }
    }
  }
`;

const LinkFooterPost = ({ to, children, rel }) => (
  <LinkFooterStyled>
    <Link to={to} rel={rel}>
      {children}
    </Link>
  </LinkFooterStyled>
);

LinkFooterPost.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  rel: PropTypes.oneOf(['prev', 'next']),
};

export default NavFooterPost;
