import styled from 'styled-components';
import { RiMenuLine } from 'react-icons/ri';

import { shade } from 'polished';

export const Container = styled.div`
  scrollbar-width: none;
  transition: all 0.4s ease;
  margin-left: 260px;
  position: relative;
  overflow: hidden;
  padding: 0;
  height: 100%;
  padding-bottom: 3.5rem;

  @media (max-width: 1200px) {
    margin-left: 0px;
  }

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.primary};
    outline: 1px solid slategrey;
  }
`;

export const Wrapper = styled.div`
  min-height: 100vh;
  flex-direction: column;
  position: relative;

  form {
    display: flex;
    flex-direction: column;

    width: 100%;

    button[type='submit'] {
      margin-top: 16px;
    }

    h4 {
      color: #c2c2c2;
      font-weight: 500;
      text-align: center;
    }

    p {
      margin: 16px 0 8px;
      color: #666360;
      font-size: 14px;
    }

    button + a {
      display: block;
      margin-top: 24px;
      color: #c2c2c2;
      text-align: center;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#c2c2c2')};
      }
    }

    hr {
      border: none;
      border-top: 1px solid ${props => props.theme.color.backgroundHover};
    }
  }

  svg {
    path[d*=' M15,15  C17.4001,15 22.7998,15.0001 27,15 C31.2002,14.9999 33.2999,6 36,6 C38.7001,6 38.6999,10.5 40.5,10.5 C42.3001,10.5 42.2999,6 45,6 C47.7001,6 50.9999,14.9999 54,15 C57.0002,15.0001 58.7999,15 60,15'] {
      display: none !important;
    }

    path[d*=' M6,15  C8.2501,15 9.7498,15.0001 15,15 C20.2502,14.9999 20.7748,3.6 27,3.6 C33.2252,3.6 33.8998,14.9999 39.9,15 C45.9002,15.0001 45.9748,15 51,15 C56.0252,15 57.7499,15 60,15'] {
      display: none !important;
    }
  }

  .rc-tabs {
    width: 100%;

    &.rc-tabs-top {
      border-bottom: none !important;
      .rc-tabs-content {
        .rc-tabs-tabpane {
          background: transparent;
        }
      }
      .rc-tabs-bar {
        border-bottom: 1px solid transparent;
        margin-bottom: 24px;
      }

      .rc-tabs-tabpane {
        background: transparent;
        border-radius: ${({ theme }) => theme.borderRadius};
      }

      .rc-tabs-tab {
        margin-right: 0 !important;
        color: ${({ theme }) => theme.color.fontColor};
        font-size: ${({ theme }) => theme.fontSize.normal} !important;
      }
    }

    .rc-tabs-tab:hover {
      background: transparent;
    }

    .rc-tabs-tab-active,
    .rc-tabs-tab-active:hover {
      color: ${({ theme }) => theme.color.fontColor} !important;
      background: transparent;
    }

    .rc-tabs-ink-bar {
      background-color: ${({ theme }) => theme.color.primary} !important;
    }
  }
`;

export const ContentOverlay = styled.div`
  @media (max-width: 1200px) {
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all 0.7s;
    z-index: 9997;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MobileMenuToggle = styled(RiMenuLine)`
  @media (min-width: 1200px) {
    display: none;
  }

  margin-right: 16px;
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    cursor: pointer;
  }
`;
