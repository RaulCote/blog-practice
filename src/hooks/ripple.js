import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ripple } from '../ui/keyframes';

/*
  use the hook and map RippleEffect as a child of your item:
  buttom, Link, input etc ..

  ex:
  <Button
    onClick={e => {
        addRipples(e);
        onClick(e);
    }}
  />
    ripples.map(ripple, key) => {
      <RippleEffect
        key={key}
        top={ripple.top}
        left={ripple.left}
        duration={`${duration}ms`}
      />
    }
  </Button>
  */

export const RippleEffect = styled.span`
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

export function useRippleEffect(duration = 500) {
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

  return [ripples, addRipples];
}

function useDebouncedRippleCleanUp(rippleCount, duration, cleanUpFunction) {
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
}

