import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > a {
    display: flex;
    align-items: center;

    color: ${props => props.theme.color.primary};
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${props => shade(0.2, props.theme.color.primary)};
    }
  }

  animation: ${appearFromRight} 1s ease;
`;
