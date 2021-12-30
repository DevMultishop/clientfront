import React from 'react';

import { Container } from './styles';

interface IProps {
  children: React.ReactNode;
}

export default function Badge({ children }: IProps) {
  return <Container className="badge">{children}</Container>;
}
