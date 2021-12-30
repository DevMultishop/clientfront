import styled from 'styled-components';

export const Container = styled.div``;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.fontColor};
  position: relative;
  margin-top: 0;

  svg {
    color: #626262;
  }
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    svg {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  span {
    display: none;
    position: absolute;
    bottom: -16px;
    right: 0;
    font-size: 0.7em;
    color: ${({ theme }) => theme.color.primary};

    &.active {
      display: block;
    }
  }
`;
