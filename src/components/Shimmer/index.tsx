import { darken, lighten } from 'polished';
import styled, { css, keyframes } from 'styled-components';

const progress = keyframes`
  0% {
      background-position: -200px 0;
  }
  100% {
      background-position: calc(200px + 100%) 0;
  }
`;

interface IProps {
  type?: string;
  width?: number;
  height?: number;
}

const ShimmerEffect = styled.span<IProps>`
  display: inline-block;
  width: 100%;
  height: ${props => (props.height ? `${props.height}px` : '13px')};
  /* border-radius: 3px; */

  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    ${lighten(1, '#fff')},
    rgba(0, 0, 0, 0)
  );
  background-color: ${darken(0.3, '#fff')};
  background-size: 200px 100%;
  background-repeat: no-repeat;

  line-height: 1;

  opacity: 0.1;
  animation: ${progress} 1.2s ease-in-out infinite;

  ${props => {
    if (props.type && props.type === 'image')
      return css`
        height: 52px;
        width: 52px;
        border-radius: 50%;
      `;

    if (props.type && props.type === 'title')
      return css`
        height: 25px;
        width: 86%;
        margin: 20px 0;

        @media (max-width: 768px) {
          width: 50%;
        }
      `;

    if (props.type && props.type === 'body')
      return css`
        margin: 3px 0;
      `;
  }}

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
`;

export default ShimmerEffect;
