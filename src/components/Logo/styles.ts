import styled, { css } from 'styled-components';

interface IProps {
  size: string;
}

export const Container = styled.div<IProps>`
  ${({ size }) => css`
    width: ${size === 'large' ? '200px' : 'calc(260px - 64px)'};
    height: ${size === 'large' ? '125px' : '56px'};
  `}

  /* margin: 0 auto; */
  img {
    width: 100%;
    height: 100%;
    /* object-fit: contain; */
    object-fit: contain;
  }
`;
