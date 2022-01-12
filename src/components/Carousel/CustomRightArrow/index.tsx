import React from 'react';
import { MdChevronLeft } from 'react-icons/md';

import { Container } from './styles';

interface IProps {
  onClick: () => void;
}

export default function CustomRightArrow({ onClick }: IProps): JSX.Element {
  return (
    <Container onClick={() => onClick()}>
      <MdChevronLeft size={80} />
    </Container>
  );
}
