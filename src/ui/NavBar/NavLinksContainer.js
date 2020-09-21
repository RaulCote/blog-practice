import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { NavLinkStyled } from './NavLink';
import {
  MARGIN_CONTAINER,
  MAX_WIDTH_CONTAINER,
  MEDIA_QUERY_MOBILE_FROM,
  MEDIA_QUERY_MOBILE_LIMIT,
} from '../../ui/variables';

const NavLinksContainer = styled.div`
  ${MEDIA_QUERY_MOBILE_FROM} {
    max-width: ${MAX_WIDTH_CONTAINER};
    width: 70%;
    margin: ${MARGIN_CONTAINER};
  }

  ${MEDIA_QUERY_MOBILE_LIMIT} {
    width: 0%;
    height: 100vh;
    /* to apply open-close effect to responsive menu */
    transition-duration: 0.2s;
    background-color: ${props => props.theme.colors.background};

    display: flex;
    flex-direction: column;

    ${NavLinkStyled} {
      display: none;
    }

    ${props =>
      props.isResponsiveMenuOpen &&
      css`
        border-top: 4px solid ${props => props.theme.colors.textColor};
        position: relative;
        height: 100vh;
        box-shadow: 0 0 3px 1px ${props => props.theme.colors.shadowColor};
        width: 80%;
        z-index: 1;

        ${NavLinkStyled} {
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
  color: ${props => props.theme.colors.textColor};
`;

NavLinksContainer.propTypes = {
  isResponsiveMenuOpen: PropTypes.bool.isRequired,
};

export default NavLinksContainer;
