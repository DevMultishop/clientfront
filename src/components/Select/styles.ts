import styled, { css } from 'styled-components';
import ReactSelect from 'react-select';

interface IProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  margin-bottom: 8px;
  border: 1px solid ${props => props.theme.color.backgroundHover};
  border-radius: 4px;
  background: ${props => props.theme.color.background};
  /* color: #666360; */
  transition: all 100ms ease 0s;

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

  > svg {
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: 1;
  }
`;

export const SelectContainer = styled(ReactSelect)`
  width: 100%;

  .react-select__control {
    position: relative;

    min-height: 38px;

    margin-left: 40px;
    border-color: transparent;
    outline: 0px !important;
    background: ${props => props.theme.color.background};

    box-shadow: none;
    cursor: pointer;

    &:hover {
      border-color: transparent;
    }

    .react-select__value-container {
      position: relative;

      flex: 1 1 0%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;

      overflow: hidden;

      height: 46px;
      padding: 2px 8px;
    }

    .react-select__single-value {
      color: #666360;
    }
  }

  .react-select__placeholder {
    /* color: #666360; */

    svg {
      margin-right: 16px;
    }
  }

  .react-select__indicator-separator {
    all: unset;
  }

  .react-select__indicator {
    cursor: pointer;
  }

  .react-select__menu {
    position: absolute;
    top: 100%;

    width: 100%;
    margin: 8px 0;
    border-radius: 5px;
    border: 1px solid #666360;
    background: ${props => props.theme.color.background};
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 1px, rgba(0, 0, 0, 0.1) 0 4px 11px;
    z-index: 99;
  }

  .react-select__option {
    display: block;
    width: 100%;
    padding: 8px 16px;
    /* color: #666360; */
    cursor: pointer;
  }

  .react-select__option--is-selected {
    color: rgba(255, 255, 255);
    background-color: ${props => props.theme.color.primary};
  }

  .react-select__option--is-focused {
    color: rgba(255, 255, 255);
    background-color: ${props => props.theme.color.primary};
  }

  .react-select__placeholder {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: text;
  }
`;
