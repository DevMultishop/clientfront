import React from 'react';

import { Container } from './styles';

interface IProps {
  showMobile: boolean;
  children: React.ReactNode;
}

export default function Sidebar({ showMobile, children }: IProps): JSX.Element {
  return (
    <Container id="sidebar" className={showMobile ? 'mobile' : ''}>
      {children}
    </Container>
  );
}
