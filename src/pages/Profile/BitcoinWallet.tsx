import React from 'react';
import { Form } from '@unform/web';
import { FiLock, FiHash } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Panel from '../../components/Panel';
import ShimmerEffect from '../../components/Shimmer';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  GetHasBitcoinWalletDocument,
  GetMyBitcoinWalletDocument,
  useCreateOrUpdateMyBitcoinWalletMutation,
  useGetMyBitcoinWalletQuery,
} from '../../graphql/generated/graphql';

interface IFormData {
  financial_password: string;
  address: string;
}

export default function BitcoinWallet(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const { data, loading } = useGetMyBitcoinWalletQuery();
  const [updateBitcoinWallet, { loading: loadingUpdate }] =
    useCreateOrUpdateMyBitcoinWalletMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          financial_password: Yup.string().required(
            'The financial password is required',
          ),
          address: Yup.string().required('Bitcoin address is required'),
        });
        await schema.validate(formData, { abortEarly: false });

        const response = await updateBitcoinWallet({
          variables: {
            address: formData.address,
            financial_password: formData.financial_password,
          },
          refetchQueries: [
            { query: GetMyBitcoinWalletDocument },
            { query: GetHasBitcoinWalletDocument },
          ],
        });

        toast.success(response.data?.createOrUpdateMyBitcoinWallet);

        formRef.current?.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [updateBitcoinWallet],
  );
  return (
    <Panel title="Your bitcoin address">
      {loading && (
        <strong>
          <ShimmerEffect height={24} />
        </strong>
      )}
      {!loading && (
        <div style={{ textAlign: 'center', padding: 16 }}>
          <strong>{`${data?.getMyBitcoinWallet}`}</strong>
        </div>
      )}

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Bitcoin address update</h4>
        <br />
        <Input
          icon={FiHash}
          name="address"
          type="text"
          placeholder="Enter your bitcoin address"
        />
        <Input
          icon={FiLock}
          name="financial_password"
          type="password"
          placeholder="Enter your financial password"
        />

        <Button loading={loadingUpdate} type="submit">
          Submit
        </Button>
      </Form>
    </Panel>
  );
}
