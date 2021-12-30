import React from 'react';
import { IoMdHelp } from 'react-icons/io';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Countdown from 'react-countdown-now';

import {
  useCreateBitcoinDepositMutation,
  useGetMyBalanceCardQuery,
} from '../../../graphql/generated/graphql';
import Placeholder from '../Placeholder';
import { ButtonAction, Container, Content, Footer } from '../styles';
import Badge from '../../Badge';
import Popover from '../../Popover';
import Modal from '../../Modal';
import { Row, Col } from '../../Grid';
import InputUsd from '../../InputUsd';
import Button from '../../Button';
import getValidationErrors from '../../../utils/getValidationErrors';
import CopyToClipboard from '../../CopyToClipboard';

interface IFormData {
  value: string;
}
interface IDepositInfo {
  address: string;
  formatted_usd_value: string;
  formatted_btc_usd_conversion: string;
  formatted_btc_amount: string;
  created_at: Date;
}

export default function Credit(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const { data, loading } = useGetMyBalanceCardQuery({
    variables: { card: 'credit' },
  });
  const [openModal, setOpenModal] = React.useState(false);
  const [depositInfo, setDepositInfo] = React.useState<IDepositInfo | null>(
    null,
  );
  const [createBitcoinDeposit, { loading: loadingCreate }] =
    useCreateBitcoinDepositMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        const usd_value = Number(
          formData.value.replace('$', '').replaceAll(',', ''),
        );
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          value: Yup.number().min(50, 'Minimum value of $50.00'),
        });

        await schema.validate({ value: usd_value }, { abortEarly: false });

        const response = await createBitcoinDeposit({
          variables: { usd_value },
        });
        setDepositInfo(response.data?.createBitcoinDeposit || null);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [createBitcoinDeposit],
  );

  const renderer = React.useCallback(({ minutes, seconds, completed }) => {
    if (completed) return <span>Time is over.</span>;

    return (
      <span>
        {`${minutes > 9 ? minutes : `0${minutes}`}:${
          seconds > 9 ? seconds : `0${seconds}`
        }`}
      </span>
    );
  }, []);
  if (loading) return <Placeholder />;

  return (
    <Container className="hover-animate">
      <Popover content="Value you can use to purchase a plan">
        <Badge>
          <IoMdHelp size={14} />
        </Badge>
      </Popover>
      <Content>
        <p>Credit</p>
        <h3>{data?.getMyBalanceCard.formatted_usd_value}</h3>
      </Content>
      <Footer>
        <Row className="content">
          <Col className="span-12">
            <ButtonAction onClick={() => setOpenModal(true)}>
              BTC DEPOSIT
            </ButtonAction>
          </Col>
        </Row>
      </Footer>
      <Modal isOpen={openModal}>
        {!depositInfo && (
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h4>Bitcoin Deposit</h4>
            <p>
              Enter the amount you want to deposit in USD. you will receive one
              unique BTC address to identify your deposit.
            </p>

            <InputUsd name="value" placeholder="Value" />

            <Button loading={loadingCreate} type="submit">
              Send
            </Button>
          </Form>
        )}

        {depositInfo && (
          <Form
            onSubmit={() => {
              // do nothing
            }}
          >
            <h4>Deposit infos:</h4>
            <p>
              Make the deposit of the amount in btc specified below to the
              following btc address:
            </p>
            <div style={{ margin: 8, fontSize: 13 }}>
              <CopyToClipboard
                value={depositInfo.address}
                label={depositInfo.address}
                isLink={false}
                message="copied to clipboard"
              />
            </div>
            <p>
              <strong>Value: </strong>
              {depositInfo.formatted_usd_value}
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                alignContent: 'center',
              }}
            >
              <p style={{ marginRight: 8 }}>BTC: </p>
              <CopyToClipboard
                value={depositInfo.formatted_btc_amount}
                label={depositInfo.formatted_btc_amount}
                isLink={false}
                message="copied to clipboard"
              />
            </div>

            <p>
              <strong>Bitcoin price: </strong>
              {depositInfo.formatted_btc_usd_conversion}
            </p>

            <Countdown
              renderer={renderer}
              date={
                Date.now() +
                300000 -
                (Date.now() - new Date(depositInfo.created_at).getTime())
              }
              onComplete={() => setDepositInfo(null)}
            />
          </Form>
        )}

        <Button
          className="close-button"
          type="button"
          onClick={() => {
            setDepositInfo(null);
            setOpenModal(false);
          }}
        >
          Close
        </Button>
      </Modal>
    </Container>
  );
}
