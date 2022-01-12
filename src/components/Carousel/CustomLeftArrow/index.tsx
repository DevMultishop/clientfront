import React from 'react';
import { MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => void;
}

export default function CustomLeftArrow({ onClick }: IProps): JSX.Element {
  return (
    <Container onClick={() => onClick()}>
      <MdChevronRight size={80} />
    </Container>
  );
}
