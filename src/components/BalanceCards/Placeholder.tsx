import React from 'react';

import ShimmerEffect from '../Shimmer';

import { Container, Content, Footer } from './styles';

export default function Placeholder(): JSX.Element {
  return (
    <Container className="hover-animate">
      <Content>
        <p>
          <ShimmerEffect width={40} height={16} />
        </p>
        <h3>
          <ShimmerEffect width={115} height={24} />
        </h3>
      </Content>

      <Footer>
        <p>
          <ShimmerEffect
            width={110}
            height={30}
            style={{ marginLeft: '16px' }}
          />
        </p>
      </Footer>
    </Container>
  );
}
