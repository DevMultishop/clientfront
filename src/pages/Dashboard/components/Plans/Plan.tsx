import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';
import { PlanContainer } from './styles';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import getValidationErrors from '../../../../utils/getValidationErrors';
import {
  GetMyBalanceCardDocument,
  useCreateMyPlanMutation,
} from '../../../../graphql/generated/graphql';

interface IProps {
  name: string;
  formatted_usd_value: string;
  id: string;
}

interface IFormData {
  password: string;
}

export default function Plan({
  formatted_usd_value,
  id,
  name,
}: IProps): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [createPlan, { loading }] = useCreateMyPlanMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string().required('The financial password is required'),
        });
        await schema.validate(formData, { abortEarly: false });
        const response = await createPlan({
          variables: {
            plan_id: id,
            financial_password: formData.password,
          },
          refetchQueries: [
            {
              query: GetMyBalanceCardDocument,
              variables: { card: 'credit' },
            },
            {
              query: GetMyBalanceCardDocument,
              variables: { card: 'applied' },
            },
          ],
        });
        toast.success(response.data?.createMyPlan);
        setIsOpen(false);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [createPlan, id],
  );
  return (
    <PlanContainer>
      <h3>{name}</h3>
      <p>{`Price: ${formatted_usd_value}`}</p>
      <Button onClick={() => setIsOpen(true)}>BUY</Button>
      <Modal isOpen={isOpen}>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h4>{`Buy ${name}`}</h4>
          <p>
            {`${formatted_usd_value} will be deducted from your credit when purchasing the plan`}
          </p>

          <p>
            Enter your financial password to confirm the purchase transaction
          </p>

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Your financial password"
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>

        <Button
          className="close-button"
          type="button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Close
        </Button>
      </Modal>
    </PlanContainer>
  );
}
