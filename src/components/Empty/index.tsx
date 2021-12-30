import React from 'react';

import { ReactComponent as EmptyIcon } from '../../assets/empty.svg';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Empty({ children, className }: IProps): JSX.Element {
  return (
    <Container className={className}>
      <EmptyIcon />
      <h3>{children}</h3>
    </Container>
  );
}
