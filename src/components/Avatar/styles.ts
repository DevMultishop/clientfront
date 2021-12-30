import styled from 'styled-components';

interface IProps {
  size: number;
}

export const Container = styled.div<IProps>`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08) !important;
  min-width: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
