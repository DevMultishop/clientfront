import React from 'react';
import { IoMdHelp } from 'react-icons/io';

import { useGetMyBalanceCardQuery } from '../../../graphql/generated/graphql';
import Placeholder from '../Placeholder';
import { Container, Content, Footer } from '../styles';
import Badge from '../../Badge';
import Popover from '../../Popover';

import { Row, Col } from '../../Grid';

export default function Applied(): JSX.Element {
  const { data, loading } = useGetMyBalanceCardQuery({
    variables: { card: 'applied' },
  });

  if (loading) return <Placeholder />;

  return (
    <Container className="hover-animate">
      <Popover content="Sum of invested amounts">
        <Badge>
          <IoMdHelp size={14} />
        </Badge>
      </Popover>
      <Content>
        <p>Applied</p>
        <h3>{data?.getMyBalanceCard.formatted_usd_value}</h3>
      </Content>
      <Footer>
        <Row className="content">
          <Col className="span-12">
            {/* <ButtonAction onClick={() => setOpenModal(true)}>
              DEPOSITAR BTC
            </ButtonAction> */}
          </Col>
        </Row>
      </Footer>
    </Container>
  );
}
