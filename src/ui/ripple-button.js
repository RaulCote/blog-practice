import React, { useState } from 'react';
import styled from 'styled-components';
import { ripple } from './keyframes';

const RippleButton = styled.button`
    background-color: ${props => props.theme.colors.buttonBackground};
    color: ${props => props.theme.colors.textColor};
    border: 0px solid transparent;
    cursor: pointer;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.85em;
    outline: none;
    overflow: hidden;
    position: relative;
    border-radius: 4%;
    width: ${props => props.width};
    height: ${props => props.height};

    &:after {
      content: '';
      position: absolute;
      top: ${props => props.top};
      left: ${props => props.left}; 
      width: 5px;
      height: 5px;
      background: ${props => props.theme.colors.rippleEffect};
      opacity: 0;
      border-radius: 100%;
      padding: 0px;
      transform: scale(1, 1) translateX(-${props =>
        -props.left}) translateY(-${props => -props.top})};
      transform-origin: ${props => props.left} ${props => props.top};
       /*    transform: scale(1, 1) translate(-50%); 
        transform-origin: 50% 50%;  */
    }

    &:active::after {
      animation: ${ripple} 1s ease-out;
    }

    &:-moz-focusring {
      outline: none;
    }
  `;

const RippleMaterialButton = ({ width, height, children, onClick, testId }) => {
  const [ripplePos, setRipplePos] = useState({ top: '50%', left: '50%' });

  function getRipplePos(e) {
    const {
      width,
      height,
      left,
      top,
    } = e.currentTarget.getBoundingClientRect();

    const newLeft = ((e.clientX - left) * 100) / width;
    const newTop = ((e.clientY - top) * 100) / height;

    setRipplePos({
      top: `${newTop.toFixed(0)}%`,
      left: `${newLeft.toFixed(0)}%`,
    });
  }

  return (
    <RippleButton
      top={ripplePos.top}
      left={ripplePos.left}
      onMouseDown={getRipplePos}
      onTouchStart={getRipplePos}
      onClick={onClick}
      width={width}
      height={height}
      data-testid={testId}
    >
      {children}
    </RippleButton>
  );
};

export default RippleMaterialButton;
