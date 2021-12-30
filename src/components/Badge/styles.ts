import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  cursor: pointer;
  right: 0;
  top: 0;
  font-size: 14px;
  position: absolute;
  width: 24px;
  height: 24px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.primary};

  &:hover {
    background-color: ${props => shade(0.2, props.theme.color.primary)};
  }
`;
