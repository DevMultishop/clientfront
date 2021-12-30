import styled, { keyframes } from 'styled-components';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  color: black;
  padding: 20px;
  margin-top: 20px;
  background: #fff;
  display: flex;
  max-height: 250px;
  flex-direction: column;
  overflow-y: scroll;

  animation: ${appearFromBottom} 1s ease;
`;
