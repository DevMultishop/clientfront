import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Placeholder from './Placeholder';

import { Container } from './styles';

interface IProps {
  image: string;
  size?: number;
}

export default function Avatar({ image, size = 40 }: IProps): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      if (loading) {
        setLoading(false);
      }
    }, 500);
  }, [loading, setLoading]);

  if (loading) return <Placeholder size={size} />;

  return (
    <Container size={size}>
      <Link to="/profile">
        <img src={image} alt="Avatar" />
      </Link>
    </Container>
  );
}
