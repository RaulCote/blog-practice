import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Button = styled.button`
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

Button.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  width: PropTypes.string,
};
