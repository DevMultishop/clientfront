import styled from 'styled-components';

export const Container = styled.button`
  position: absolute;

  visibility: hidden;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 48px;
  height: 100%;

  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;

  /* background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 97.3%, 0.46) 73%,
    hsla(0, 0%, 97.3%, 0.95) 44%
  ); */
  transform: rotate(180deg);
  transition: all 0.3s ease 0s;
  opacity: 0;

  svg {
    color: rgba(98, 98, 98, 0.8);
  }
`;
