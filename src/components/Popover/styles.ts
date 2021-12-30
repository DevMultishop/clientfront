import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  display: block;
  background: transparent;
  border: none;
`;

export const Content = styled.div`
  display: block;
  height: auto;
  width: 100%;
  padding: 16px 8px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.fontColor};
  background: ${({ theme }) =>
    lighten(0.2, theme.color.backgroundCard)}; /*rgb(30, 29, 36);*/
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);

  .info {
    margin-top: 8px;

    .danger {
      color: #dd5554;
    }
    .success {
      color: #4fcda5;
    }
  }
`;

export const Title = styled.h4`
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  color: ${({ theme }) => theme.color.fontColorSecondary};
  padding: 8px;
  background-color: ${props => props.theme.color.primary};

  &:empty {
    display: none;
  }

  border-top-left-radius: ${props => props.theme.borderRadius};
  border-top-right-radius: ${props => props.theme.borderRadius};
`;
export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1060;
  display: none;
  width: 200px;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  &.show {
    display: flex;
  }
`;

export const Arrow = styled.div`
  display: block;
  width: 0px;
  height: 0px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid ${props => lighten(0.2, props.theme.color.primary)};
`;
