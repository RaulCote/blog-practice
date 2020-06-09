import React, { useState, useEffect } from 'react';
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
  padding: 0.5em;
  position: relative;
  border-radius: 4%;
  width: ${props => props.width};
  height: ${props => props.height};
`;

const RippleEffect = styled.span`
  top: ${props => props.top};
  left: ${props => props.left};
  position: absolute;
  border-radius: 50%;
  width: 2px;
  height: 2px;
  transform: scale(0);
  background: ${props => props.theme.colors.rippleEffect};
  animation: ${ripple} ${props => props.duration} ease-out;
`;

const useDebouncedRippleCleanUp = (rippleCount, duration, cleanUpFunction) => {
  useEffect(() => {
    let bounce = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

const RippleMaterialButton = ({
  width,
  height,
  children,
  onClick,
  testId,
  duration = 500,
}) => {
  const [ripples, setRipples] = useState([]);

  useDebouncedRippleCleanUp(ripples.length, duration, () => setRipples([]));

  function addRipples(e) {
    const newLeft = e.pageX - e.currentTarget.offsetLeft;
    const newTop = e.pageY - e.currentTarget.offsetTop;

    const newRipple = {
      left: newLeft + 'px',
      top: newTop + 'px',
    };

    setRipples(prevRipples => [...prevRipples, newRipple]);
  }

  return (
    <RippleButton
      onClick={e => {
        addRipples(e);
        onClick(e);
      }}
      width={width}
      height={height}
      data-testid={testId}
    >
      {children}
      {ripples.map((ripple, key) => (
        <RippleEffect
          key={key}
          top={ripple.top}
          left={ripple.left}
          duration={`${duration}ms`}
        />
      ))}
    </RippleButton>
  );
};

export default RippleMaterialButton;
