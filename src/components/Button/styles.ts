import styled, { css, keyframes } from 'styled-components';
import { shade } from 'polished';

interface IProps {
  isLoading: boolean;
  size: string;
}

export const Zoom = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export const Container = styled.button<IProps>`
  position: relative;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  height: ${props => (props.size === 'large' ? 50 : 40)}px;
  padding: 0 80px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.fontSize.normal};
  transition: background 0.2s;

  &:hover {
    background-color: ${props => shade(0.2, props.theme.color.primary)};
  }

  &:disabled {
    color: ${shade(0.2, '#fff')};
    background-color: ${props => shade(0.2, props.theme.color.primary)};
    cursor: not-allowed;
  }

  ${props =>
    props.isLoading &&
    css`
      pointer-events: none;
      color: transparent;

      &::before,
      &::after {
        content: '';
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 100%;
        border-radius: ${props.theme.borderRadius};
        background-color: ${shade(0.15, props.theme.color.primary)};
      }

      &::before {
        z-index: 2;
        top: 0;
        left: ${props.size === 'large'
          ? 'calc(50% - 25px)'
          : 'calc(50% - 20px)'};

        width: ${props.size === 'large' ? '50px' : '40px'};
        height: 100%;
        border-radius: 50%;

        background: radial-gradient(
          ellipse at center,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(245, 240, 245, 0.2) 45%,
          rgba(237, 237, 237, 0.1) 54%,
          rgba(255, 255, 255, 0.08) 71%,
          rgba(255, 255, 255, 0.05) 100%
        );

        animation: 2s ease-in-out 0s infinite normal none running ${Zoom};
      }
    `}

  svg {
    margin: 0;
    margin-right: 16px;
  }
`;
