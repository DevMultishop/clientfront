import React from 'react';
import { Col, Container, Row } from '../../../../components/Grid';
import ShimmerEffect from '../../../../components/Shimmer';
import { useGetPlansQuery } from '../../../../graphql/generated/graphql';
import Plan from './Plan';

export default function Plans(): JSX.Element {
  const { data, loading } = useGetPlansQuery();

  return (
    <Container>
      <h2>Investment plans</h2>
      {loading && <ShimmerEffect height={200} />}
      <Row>
        {data?.getPlans.map(plan => (
          <Col key={plan.id} className="span-12 span-sm-4">
            <Plan
              name={plan.name}
              id={plan.id}
              formatted_usd_value={plan.formatted_usd_value}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
