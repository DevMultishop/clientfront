import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
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

  animation: ${appearFromLeft} 1s;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */

  button {
    margin-left: 6px;
    /* margin-bottom: 3px; */
    text-decoration: none;
    background: transparent;
    border: none;
    display: inline-flex;
    align-items: flex-end;
    color: ${props => props.theme.color.primary};
    cursor: pointer;
  }
`;
