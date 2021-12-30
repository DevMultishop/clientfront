import React from 'react';
import { Container, Row, Col } from '../../components/Grid';
import GainsChartSelector from './GainsChartSelector';
import ProgressChart from './ProgressChart.js';

export default function Gains(): JSX.Element {
  return (
    <Container>
      <h2>My Gains</h2>
      <Row style={{ marginBottom: 16 }}>
        <Col className="span-12">
          <ProgressChart />
        </Col>
      </Row>
      <Row>
        <Col className="span-12">
          <GainsChartSelector />
        </Col>
      </Row>
    </Container>
  );
}
