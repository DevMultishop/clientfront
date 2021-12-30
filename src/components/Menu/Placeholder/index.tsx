import React from 'react';
import ShimmerEffect from '../../Shimmer';
import Logo from '../../Logo';

import { Container, NavHeader, Nav, Wrap, ListaNav, NavItem } from '../styles';

interface IProps {
  numberRows: number;
}

export default function Placeholder({ numberRows }: IProps): JSX.Element {
  const arrayRows = Array.from({ length: numberRows }, (v, k) => k);

  return (
    <Container className="drop">
      <NavHeader>
        <Logo />
      </NavHeader>
      <Nav>
        <Wrap>
          <ListaNav>
            {arrayRows.map(row => (
              <NavItem key={row}>
                <a href="/">
                  <ShimmerEffect type="image" width={24} height={24} />
                  <ShimmerEffect width={200} height={24} />
                </a>
              </NavItem>
            ))}
          </ListaNav>
        </Wrap>
      </Nav>
    </Container>
  );
}
