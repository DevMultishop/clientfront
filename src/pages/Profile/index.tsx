import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import BitcoinWallet from './BitcoinWallet';
import FinancialPassword from './FinancialPassword';
import PersonalInfo from './PersonalInfo';

export default function Profile(): JSX.Element {
  return (
    <Container>
      <h2>My profile</h2>
      <Row>
        <Col className="span-12">
          <PersonalInfo />
        </Col>
      </Row>
      <Row>
        <Col className="span-12 span-md-6">
          <BitcoinWallet />
        </Col>
        <Col className="span-12 span-md-6">
          <FinancialPassword />
        </Col>
      </Row>
    </Container>
  );
}
