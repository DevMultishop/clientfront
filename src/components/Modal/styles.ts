import styled, { css } from 'styled-components';

interface ContainerProps {
  isOpen: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;

  visibility: hidden;
  /* overflow: scroll; */

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  height: 100%;
  /* min-height: fit-content; */

  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  transition: all 0.3s ease 0s;
  cursor: pointer;
  opacity: 0;

  ${props =>
    props.isOpen &&
    css`
      visibility: visible;
      opacity: 1;

      & > div {
        transform: translateY(0);
        opacity: 1;
      }
    `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 400px;
  padding: 40px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.backgroundCard};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  transform: translateY(-100px);
  transition: transform 0.3s ease 0s, opacity 0.4s ease 0s;
  cursor: default;
  opacity: 0;

  h3 {
    color: rgb(135, 134, 139) !important;
  }
  .close-button {
    color: rgb(135, 134, 139) !important;
    background-color: transparent;
    margin-top: 16px;
  }
`;
