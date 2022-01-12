import styled from 'styled-components';

interface IProps {
  active: boolean;
}

export const Container = styled.div<IProps>`
  width: 55px;
  height: 55px;
  overflow: hidden;
  border-radius: 5px;
  border: 3px solid transparent;
  transition: border-color 0.2s ease-in;

  &:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  border-color: ${({ active, theme }) =>
    active ? theme.color.primary : theme.color.backgroundHeader};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
