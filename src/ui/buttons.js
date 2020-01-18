import styled from 'styled-components';
import { ripple } from './keyframes';

export const Button = styled.button`
  background-color: ${props => props.theme.colors.buttonBackground}; 
  color: ${props => props.theme.colors.textColor};
  border: 0px solid transparent;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85em;
  outline: none;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: ${props => props.theme.colors.rippleEffect};
    //rgba(43, 206, 151, 0.664);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
    padding: 0px;
  }

  &:focus:not(:active)::after {
    animation: ${ripple} 1s ease-out;
  }

  &:active {
    padding: 0px;
  }

  &:-moz-focusring {
    outline: none;
  }
`;

export const RippleButton = styled(Button)`
  overflow: hidden;
  position: relative;
  border-radius: 4%;
  width: ${props => props.width};
  height: ${props => props.height};
`

