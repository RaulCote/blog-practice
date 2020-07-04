import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition-duration: 0.2s;
  min-height: 100vh;
  height: 100%;
`;
