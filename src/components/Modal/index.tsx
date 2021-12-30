import React from 'react';

import { Container, Content } from './styles';

interface IProps {
  className?: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

export default function Modal({
  className,
  children,
  isOpen = false,
}: IProps): JSX.Element {
  return (
    <Container className={className} isOpen={isOpen}>
      <Content>{children}</Content>
    </Container>
  );
}
