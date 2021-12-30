import React from 'react';
import Empty from '../../components/Empty';
import ListPlaceholder from '../../components/ListPlaceholder';
import { useGetMyStatmentQuery } from '../../graphql/generated/graphql';
import { Col, Line, Row } from '../../components/Grid';

interface IParams {
  month: number;
  year: number;
  card: string;
}

export default function StatmentList({
  card,
  month,
  year,
}: IParams): JSX.Element {
  const { data, loading } = useGetMyStatmentQuery({
    variables: {
      card,
      month,
      year,
    },
  });
  if (loading) return <ListPlaceholder />;
  return (
    <div style={{ minHeight: 160 }}>
      {data && (
        <ul>
          <Line>
            <Row style={{ color: 'white' }}>
              <Col>DATE</Col>
              <Col>VALUE</Col>
              <Col>DESCRIPTION</Col>
            </Row>
          </Line>
          {data?.getMyStatment.map(item => (
            <Line key={item.id}>
              <Row>
                <Col>{item.formatted_date}</Col>
                <Col style={{ color: item.color }}>
                  {item.formatted_usd_value}
                </Col>
                <Col>{item.description}</Col>
              </Row>
            </Line>
          ))}
        </ul>
      )}

      {data && data.getMyStatment.length === 0 && <Empty>Empty</Empty>}
    </div>
  );
}
