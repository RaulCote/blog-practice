import React from 'react';
import styled from 'styled-components';
import { useRippleEffect, RippleEffect } from '../hooks/ripple';

const Button = styled.button`
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

const RippleButton = ({
  width,
  height,
  children,
  onClick,
  testId,
  duration = 500,
}) => {
  const [ripples, addRipples] = useRippleEffect(duration, onClick);

  return (
    <Button
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
    </Button>
  );
};

export default RippleButton;
