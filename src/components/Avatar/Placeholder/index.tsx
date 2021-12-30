import React from 'react';

import ShimmerEffect from '../../Shimmer';

import { Container } from '../styles';

interface IProps {
  size: number;
}

export default function Placeholder({ size }: IProps): JSX.Element {
  return (
    <Container size={size}>
      <ShimmerEffect type="image" />
    </Container>
  );
}
