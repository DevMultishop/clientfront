import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import Panel from '../../components/Panel';
import CreateDeposit from './CreateDeposit';

export default function BankDeposit(): JSX.Element {
  return (
    <Container>
      <h2>Bank Deposits</h2>
      <Panel>
        <Row>
          <Col>
            <CreateDeposit />
          </Col>
        </Row>
      </Panel>
    </Container>
  );
}
