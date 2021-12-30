import styled from 'styled-components';

export const CodeDiv = styled.p`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.color.primary};
  }
`;
