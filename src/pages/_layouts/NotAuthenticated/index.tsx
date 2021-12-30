import React from 'react';
import Logo from '../../../components/Logo';

import Panel from '../../../components/Panel';

import {
  Container,
  Content,
  //  Logo,
  Background,
} from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function NotAuthenticatedLayout({
  children,
}: IProps): JSX.Element {
  return (
    <Container>
      <Content>
        <Logo />

        <Panel>{children}</Panel>
      </Content>
      <Background />
    </Container>
  );
}
