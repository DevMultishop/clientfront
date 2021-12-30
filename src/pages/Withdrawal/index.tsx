import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import { Container, Row, Col } from '../../components/Grid';
import MonthPicker from '../../components/MonthPicker';
import Panel from '../../components/Panel';
import { useGetHasBitcoinWalletQuery } from '../../graphql/generated/graphql';
import WithdrawalForm from './WithdrawalForm';
import WithdrawalStatment from './WithdrawalStatment';
// import CreateWithdrawalSolicitation from './CreateWithdrawalSolicitation';
// import WithdrawalsList from './WithdrawalsList';

export default function Withdrawal(): JSX.Element {
  const { data } = useGetHasBitcoinWalletQuery();
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <Container>
      <h2>Withdrawals</h2>
      <Panel>
        <Row>
          <Col className="span-12 span-md-6">
            {data && data.getHasBitcoinWallet && <WithdrawalForm />}
            {data && !data.getHasBitcoinWallet && (
              <div
                style={{
                  border: '1px solid yellow',
                  padding: 8,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    color: 'yellow',
                    justifyContent: 'center',
                  }}
                >
                  <FiAlertTriangle size={24} style={{ marginRight: 8 }} />
                </div>
                <p
                  style={{
                    lineHeight: 1.5,
                    textAlign: 'center',
                    marginBottom: 8,
                  }}
                >
                  Withdrawals are via the Bitcoin Network. register your bitcoin
                  address on the profile page.
                </p>
              </div>
            )}
          </Col>
          <Col className="span-12 span-md-6">
            <div
              style={{
                // border: '1px solid',
                padding: 8,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
              }}
            >
              <h4>Minimum value of $100.00</h4>
              <br />
              <h4>Maximum value of $10,000.00</h4>
              <br />
              <h4>Available on Fridays and on the first day of every month</h4>
            </div>
          </Col>
        </Row>
      </Panel>
      <Panel
        title="Monthly statement
"
      >
        <div>
          <MonthPicker
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
          />
        </div>
        <WithdrawalStatment
          month={selectedDate.getMonth()}
          year={selectedDate.getFullYear()}
        />
      </Panel>
    </Container>
  );
}
