import React from 'react';
import styled from 'styled-components';
import { useRippleEffect, RippleEffect } from '../hooks/ripple';

const Button = styled.button`
  background-color: ${props => props.theme.colors.buttonBackground};
  border-radius: 4%;
  border: 0px solid transparent;
  color: ${props => props.theme.colors.textColor};
  cursor: pointer;
  font-size: 0.85em;
  font-weight: 600;
  height: ${props => props.height};
  outline: none;
  overflow: hidden;
  padding: 0.5em;
  position: relative;
  text-decoration: none;
  width: ${props => props.width};
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
