import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useRippleEffect, RippleEffect } from '../hooks/ripple';
import { MEDIA_QUERY_MOBILE_LIMIT } from '../ui/variables';

const StyledRippleButton = styled.button`
  ${MEDIA_QUERY_MOBILE_LIMIT} {
    width: 20%;
    height: 4em;
  }

  font-size: 1em;
  overflow: hidden;
  border-radius: 0%;
  background-color: inherit;
  color: inherit;
  position: absolute;
  top: 0;
  right: 0;
  height: 8vh;
  width: 10%;
  border: 0px solid transparent;
  cursor: pointer;
  font-weight: 600;
  outline: none;
  padding: 0.5em;
  text-decoration: none;

  &:hover {
    opacity: 1;
    color: ${props => props.theme.colors.textColorHover};
    background-color: ${props => props.theme.colors.backgroundHover};
  }
`;

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
    <StyledRippleButton
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
    </StyledRippleButton>
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
