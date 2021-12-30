import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { FiLock } from 'react-icons/fi';
import InputUsd from '../../components/InputUsd';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  GetMyBalanceCardDocument,
  useCreateBitcoinWithdrawalMutation,
  useGetIsWithdrawalOpenQuery,
} from '../../graphql/generated/graphql';
import Input from '../../components/Input';

interface IFormData {
  value: string;
  financial_password: string;
}

export default function WithdrawalForm(): JSX.Element {
  const [createWithdrawal, { loading }] = useCreateBitcoinWithdrawalMutation();
  const { data: isOpen } = useGetIsWithdrawalOpenQuery();
  const formRef = React.useRef<FormHandles>(null);
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        const usd_value = Number(
          formData.value.replace('$', '').replaceAll(',', ''),
        );
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          value: Yup.number().min(10, 'Minimum value of $100.00'),
          financial_password: Yup.string().required(
            'Financial password is required',
          ),
        });

        await schema.validate(
          { value: usd_value, financial_password: formData.financial_password },
          { abortEarly: false },
        );

        const response = await createWithdrawal({
          variables: {
            usd_value,
            financial_password: formData.financial_password,
          },
          refetchQueries: [
            {
              query: GetMyBalanceCardDocument,
              variables: { card: 'available' },
            },
          ],
        });
        toast.success(response.data?.createBitcoinWithdrawal);
        formRef.current?.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [createWithdrawal],
  );
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <h4>Solicitar saque</h4>
      <p>Informe o valor do saque.</p>

      <InputUsd
        name="value"
        placeholder="USD"
        disabled={!isOpen?.getIsWithdrawalOpen}
      />

      <Input
        icon={FiLock}
        name="financial_password"
        type="password"
        placeholder="Enter your financial password"
        disabled={!isOpen?.getIsWithdrawalOpen}
      />

      <Button
        loading={loading}
        type="submit"
        disabled={!isOpen?.getIsWithdrawalOpen}
      >
        Submit
      </Button>
    </Form>
  );
}
