import styled, { css } from 'styled-components';
import { transparentize, lighten, shade } from 'polished';
import { Link } from 'react-router-dom';
import Button from '../Button';

export const Container = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.color.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.color.backgroundBody};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
  border-image: initial;
  margin-bottom: 10px;
  min-width: 180px;

  .badge {
    top: 8px;
    right: 8px;
  }

  .popover {
    top: 50px;
    right: 8px;
    left: unset;

    align-items: flex-end;

    .popover-arrow {
      margin-right: 10px;
    }
  }
`;

export const Content = styled.div`
  padding: 12px;
  padding-top: 2.8rem;
`;

export const Footer = styled.div`
  &::before {
    display: inline-block;
    content: '';
    border-bottom: 0.2px solid
      ${({ theme }) => transparentize(0.1, theme.color.fontColor)};
    width: 100%;
    margin-bottom: 1rem;
  }

  min-height: 65px;
  padding-bottom: 1.3rem;
  background: ${({ theme }) => theme.color.backgroundHover};

  .content {
    margin: 0;
  }
`;

export const ButtonLink = styled(Link)`
  width: 160px;
  height: 35px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 0.1rem;
  padding: 0.25rem 0.5rem;
  margin-top: -0.5rem;
  margin-left: 8px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  > a {
    display: flex;
  }

  ${({ to }) =>
    !to &&
    css`
      background: ${({ theme }) => lighten(0.1, theme.color.backgroundCard)};
      color: ${({ theme }) => shade(0.5, theme.color.fontColor)};
      cursor: not-allowed;
    `};
`;

export const ButtonAction = styled(Button)`
  width: 160px;
  height: 35px;
  background: ${({ theme }) => theme.color.primary};
  border-radius: 0.1rem;
  padding: 0.25rem 0.5rem;
  margin-top: -0.5rem;
  margin-left: 8px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: left;

  > svg {
    margin-right: 0px;
  }

  > a {
    display: flex;
  }
`;
