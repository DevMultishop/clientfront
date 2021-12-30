import React from 'react';

import { Container, HeaderContainer } from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function Header({ children }: IProps): JSX.Element {
  return (
    <Container>
      <HeaderContainer>{children}</HeaderContainer>
    </Container>
  );
}
