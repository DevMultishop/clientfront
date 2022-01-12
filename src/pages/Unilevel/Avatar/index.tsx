import React from 'react';

import { Container } from './styles';

interface IProps {
  image: string;
  active: boolean;
}

export default function Avatar({ image, active }: IProps): JSX.Element {
  return (
    <Container className="avatar" active={active}>
      <img src={image} alt="Avatar - User Name" />
    </Container>
  );
}
