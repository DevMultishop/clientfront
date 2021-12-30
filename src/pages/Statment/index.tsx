/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { FiCreditCard } from 'react-icons/fi';
import { Container, Row, Col } from '../../components/Grid';
import MonthPicker from '../../components/MonthPicker';
import Panel from '../../components/Panel';
import Select from '../../components/Select';
import StatmentList from './StatmentList';

interface ICard {
  value: string;
  label: string;
}

const cards: ICard[] = [
  {
    label: 'Credit',
    value: 'credit',
  },
  {
    label: 'Applied',
    value: 'applied',
  },
  {
    label: 'Income',
    value: 'income',
  },
  {
    label: 'Available',
    value: 'available',
  },
  // {
  //   label: 'Depositos Bitcoin',
  //   value: 'bitcoin-deposits',
  // },
];

export default function Statment(): JSX.Element {
  const [card, setCard] = React.useState<ICard | null>(null);
  const [selectedDate, handleDateChange] = React.useState(new Date());

  return (
    <Container>
      <h2>My Statment</h2>
      <Panel>
        <Row>
          <Col className="span-12 span-md-6">
            <Select
              name="card"
              icon={<FiCreditCard size={20} />}
              placeholder="Select a card"
              options={cards}
              onChange={(e: any) => setCard(e)}
            />
          </Col>
          <Col className="span-12 span-md-6">
            <MonthPicker
              selectedDate={selectedDate}
              handleDateChange={handleDateChange}
            />
          </Col>
        </Row>
        <Row>
          <Col className="span-12">
            {!card && (
              <div
                style={{
                  minHeight: 160,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <p>Select a card above to view the transactions</p>
              </div>
            )}
            {card && (
              <StatmentList
                month={selectedDate.getMonth()}
                year={selectedDate.getFullYear()}
                card={card.value}
              />
            )}
          </Col>
        </Row>
      </Panel>
    </Container>
  );
}
