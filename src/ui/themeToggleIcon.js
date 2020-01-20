import styled from 'styled-components';
import { screenRipple } from './keyframes';

export const DarkModeButton = styled.button`
  background-color: ${props => props.theme.colors.toggleButton};
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
    right: 50%;
    width: 5px;
    height: 5px;
    background: ${props => props.theme.colors.changeModeEffect};
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
    padding: 0px;

    &:hover {
      opacity: 1;
    }
  }

  &:focus:not(:active)::after {
    animation: ${screenRipple} 0.6s ease-out;
  }

  &:active {
    padding: 0px;
  }

  &:-moz-focusring {
    outline: none;
  }
`;

export const ToggleThemeButton = styled(DarkModeButton)`
  position: relative;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
