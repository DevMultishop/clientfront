import styled, { css } from 'styled-components';

interface Iprops {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
  disabled: boolean;
}

export const Container = styled.div<Iprops>`
  height: 50px;
  width: 100%;
  padding: 16px;
  border-radius: 5px;
  background: ${props => props.theme.color.background};

  border: 1px solid ${props => props.theme.color.backgroundHover};
  color: #666360;

  display: flex;
  align-items: center;

  transition: border-color 0.2s, color 0.2s;

  & + div {
    margin-top: 8px;
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
      color: ${props.theme.color.primary};
    `}

  ${props =>
    props.isFilled &&
    css`
      color: ${props.theme.color.primary};
    `}

  input {
    flex: 1;
    border: 0;
    color: ${props => props.theme.color.fontColor};
    background: transparent;
    font-size: ${props => props.theme.fontSize.normal};

    &::placeholder {
      color: #666360;
    }

    ${props =>
      props.disabled &&
      css`
        color: #666360;
      `}
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled.span`
  display: block;
  margin: 4px 0 8px;
  color: #fb6f91;
  font-size: 14px;
  font-weight: bold;
`;
