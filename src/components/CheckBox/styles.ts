import styled, { css } from 'styled-components';

interface IProps {
  isErrored: boolean;
  isFocused: boolean;
}

export const Container = styled.label<IProps>`
  position: relative;

  display: flex;
  align-items: center;

  height: 24px;
  padding-left: 32px;
  margin-top: 16px;
  color: #666360;
  font-size: 14px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;

    height: 0;
    width: 0;

    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: 0;
    left: 0;

    height: 24px;
    width: 24px;
    border-radius: 5px;

    border: 2px solid ${props => props.theme.color.backgroundHover};
    background: ${props => props.theme.color.background};
    transition: background 0.2s;

    &:after {
      content: '';
      display: none;
      position: absolute;
      left: 7px;
      top: 3px;

      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }

    ${props =>
      props.isErrored &&
      css`
        border-color: #fb6f91;
      `}

    ${props =>
      props.isFocused &&
      css`
        border-color: ${props.theme.color.primary};
      `}
  }

  &:hover input ~ span {
    border-color: ${props => props.theme.color.primary};
  }

  input:checked ~ span {
    border-color: ${props => props.theme.color.primary};
    background: ${props => props.theme.color.primary};
  }

  input:checked ~ span:after {
    display: block;
  }
`;
