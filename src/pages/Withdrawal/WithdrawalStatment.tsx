import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import Empty from '../../components/Empty';
import { Col, Line, Row } from '../../components/Grid';
import ListPlaceholder from '../../components/ListPlaceholder';
import { useGetMyWithdrawalStatmentQuery } from '../../graphql/generated/graphql';

interface IProps {
  month: number;
  year: number;
}

export default function WithdrawalStatment({
  month,
  year,
}: IProps): JSX.Element {
  const { data, loading } = useGetMyWithdrawalStatmentQuery({
    variables: { month, year },
  });

  if (loading) return <ListPlaceholder />;

  return (
    <div>
      <ul>
        <Line>
          <Row style={{ color: 'white' }}>
            <Col>DATE</Col>
            <Col>VALUE</Col>
            <Col>BTC</Col>
            <Col>TXID</Col>
          </Row>
        </Line>
        {data?.getMyWithdrawalStatment.map(item => (
          <Line key={item.id}>
            <Row>
              <Col>{item.formatted_date}</Col>
              <Col>{item.formatted_usd_value}</Col>
              <Col>{item.formatted_btc_amount}</Col>
              {!item.txid && <Col>Processing...</Col>}
              {item.txid && (
                <Col>
                  <FiExternalLink
                    style={{ cursor: 'pointer' }}
                    onClick={() => window.open(item.txid_link)}
                  />
                </Col>
              )}
            </Row>
          </Line>
        ))}
      </ul>

      {data && data.getMyWithdrawalStatment.length === 0 && (
        <Empty>Empty</Empty>
      )}
    </div>
  );
}
