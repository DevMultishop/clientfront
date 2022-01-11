import React from 'react';
import { Link } from 'react-router-dom';

import Image from '../../assets/logo.png';

import { Container } from './styles';

interface IProps {
  size?: string;
}

export default function Logo({ size = 'large' }: IProps): JSX.Element {
  return (
    <Container size={size}>
      <Link to="/">
        <img src={Image} alt="Logo" />
      </Link>
    </Container>
  );
}
