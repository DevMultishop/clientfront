import styled, { keyframes } from 'styled-components';

const appearZoomFade = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.main`
  padding: 1.8rem 1.8rem 0;
  margin-top: 5.25rem;

  animation: ${appearZoomFade} 0.5s;
`;
