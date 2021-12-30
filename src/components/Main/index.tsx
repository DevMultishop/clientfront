import React from 'react';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function Main({ children }: IProps): JSX.Element {
  return <Container>{children}</Container>;
}
