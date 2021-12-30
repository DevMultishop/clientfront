import React from 'react';

import { Container, Row, Col } from '../Grid';
import Applied from './Applied';
import Avalilable from './Available';
import Credit from './Credit';
import Income from './Income';

export default function BalanceCards(): JSX.Element {
  return (
    <Container>
      <Row>
        <Col>
          <Credit />
        </Col>
        <Col>
          <Applied />
        </Col>
        <Col>
          <Income />
        </Col>
        <Col>
          <Avalilable />
        </Col>
      </Row>
    </Container>
  );
}
