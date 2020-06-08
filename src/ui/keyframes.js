import { keyframes } from 'styled-components';

export const ripple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }

  20% {
    transform: scale(20, 20);
    opacity: 0.8;
  }

  100% {
    transform: scale(100, 100);
    opacity: 0;
  }
`;

export const screenRipple = keyframes`
  0% {
    transform: scale(0, 0);
    opacity: 1;
  }

  25% {
    transform: scale(500, 500);
    opacity: 1;
  }

  100% {
    transform: scale(1000, 1000);
    opacity: 0;
  }
`;
