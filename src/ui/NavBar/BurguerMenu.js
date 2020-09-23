import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERY_MOBILE_LIMIT } from '../../ui/variables';

const BurguerMenuStyled = styled.div`
  display: none;

  ${MEDIA_QUERY_MOBILE_LIMIT} {
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
      background-color: ${props => props.theme.colors.titles};
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

const BurguerMenu = ({ isResponsiveMenuOpen, onToggle }) => (
  <BurguerMenuStyled>
    <input
      type={'checkbox'}
      id={'burguer-check'}
      checked={isResponsiveMenuOpen}
      onChange={onToggle}
    />
    <label htmlFor={'burguer-check'}>
      <div id={'burguer-bar'} />
      <div id={'burguer-bar'} />
    </label>
  </BurguerMenuStyled>
);

BurguerMenu.propTypes = {
  isResponsiveMenuOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default BurguerMenu;
