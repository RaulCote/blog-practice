import React from 'react';
import PropTypes from 'prop-types';
import { useRippleEffect, RippleEffect } from '../hooks/ripple';
import { Button } from '../ui/buttons';

const RippleButton = ({
  children,
  duration = 500,
  height,
  onClick,
  testId,
  width,
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

RippleButton.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number,
  height: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
};

export default RippleButton;
