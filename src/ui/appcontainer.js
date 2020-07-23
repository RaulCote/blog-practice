import styled from 'styled-components';
import { MEDIA_QUERY_MOBILE_LIMIT } from './variables';

export const AppContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.textColor};
  transition-duration: 0.2s;
  min-height: 100vh;
  height: 100%;

  code[class*='language-'],
  pre[class*='language-'] {
    ${MEDIA_QUERY_MOBILE_LIMIT} {
      font-size: 15px;
      overflow-x: auto;

      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
