import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { transparentize, shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const NavHeader = styled.div`
  /* background: #e5e5e5; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1rem 1rem 1.64rem;
`;

export const Close = styled(MdClose)`
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};

  @media (min-width: 1200px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  overflow-y: auto;
  padding-right: 3px;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    display: none;
  }

  &:hover {
    padding-right: 0;
    scrollbar-color: ${({ theme }) => theme.color.fontColor};

    ::-webkit-scrollbar {
      display: initial;
      width: 3px;
    }
    ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.color.backgroundMenu};
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.color.backgroundHover};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${({ theme }) => shade(0.2, theme.color.backgroundHover)};
    }
  }
`;

export const Wrap = styled.div`
  padding: 16px 8px;
`;

export const ListHeader = styled.div`
  margin: 2rem 0 0.8rem 16px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => shade(0.3, theme.color.fontColor)};

  svg {
    margin-right: 8px;
  }
`;

export const ListaNav = styled.div``;

export const NavItem = styled.div`
  width: 100%;
  margin-bottom: 16px;
  border-radius: ${({ theme }) => theme.borderRadius};

  a,
  button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 8px 16px 12px;
    border: none;
    outline: none;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSize.normal};
    transition: background-color 0.2s ease;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.color.fontColor};
    transition: all 0.4s ease;

    span {
      display: block;
      margin-right: 16px;
    }

    svg {
      margin-right: 16px;
    }

    &.current {
      color: ${({ theme }) => theme.color.fontColorSecondary} !important;
      background: linear-gradient(
        118deg,
        ${({ theme }) => theme.color.primary},
        ${({ theme }) => transparentize(0.3, theme.color.primary)}
      );
      box-shadow: 0 0 5px 1px
        ${({ theme }) => transparentize(0.3, theme.color.primary)} !important;
    }
    &.disabled {
      pointer-events: none;
      color: ${({ theme }) => shade(0.5, theme.color.fontColor)};
    }
    &:hover {
      padding-left: 25px;
    }
  }
`;

export const SubMenu = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: 16px;

  button {
    position: relative;
    border: none;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    outline: none;
    padding: 8px 16px 12px;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: ${({ theme }) => theme.color.fontColor};

    svg {
      margin-right: 16px;
    }

    transition: all 0.4s ease;

    &:hover {
      background-color: ${({ theme }) => theme.color.backgroundMenu};
      padding-left: 25px;
    }
  }

  ${ListaNav} {
    opacity: 0;
    height: auto;
    overflow: hidden;

    ${NavItem} {
      height: 0;
      margin-bottom: 0;
      opacity: 0;
      a {
        color: transparent;
      }
      transition: height 0.1s ease, opacity 0.3s ease;
    }
  }

  ${ListaNav} {
    opacity: 1;
    overflow: visible;
    padding: 8px 0 16px;

    ${NavItem} {
      height: 24px;
      margin-bottom: 16px;

      a {
        color: ${({ theme }) => theme.color.fontColor};
        font-weight: 300;
      }

      &:last-child {
        margin-bottom: 0;
      }

      opacity: 1;
    }
  }
`;
