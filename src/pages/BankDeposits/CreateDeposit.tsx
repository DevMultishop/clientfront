import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { FiLock } from 'react-icons/fi';
import InputUsd from '../../components/InputUsd';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import CopyToClipboard from '../../components/CopyToClipboard';
import Upload from '../../components/Upload';
import { useCreateUserBankDepositMutation } from '../../graphql/generated/graphql';

interface IFormData {
  value: string;
  financial_password: string;
}

export default function CreateDeposit(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const [file, setFile] = React.useState<File>();
  const [createDeposit, { loading }] = useCreateUserBankDepositMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        const usd_value = Number(
          formData.value.replace('$', '').replaceAll(',', ''),
        );
        formRef?.current?.setErrors({});
        if (!file) {
          toast.error('File is required');
        }
        const schema = Yup.object().shape({
          value: Yup.number().min(1, 'Minimum value of $1'),
          financial_password: Yup.string().required(
            'Financial password is required',
          ),
        });

        await schema.validate(
          { value: usd_value, financial_password: formData.financial_password },
          { abortEarly: false },
        );

        const response = await createDeposit({
          variables: {
            usd_cents: usd_value * 100,
            financial_password: formData.financial_password,
            comprovant: file,
          },
          // refetchQueries: [
          //   {
          //     query: GetMyBalanceCardDocument,
          //     variables: { card: 'available' },
          //   },
          // ],
        });
        toast.success(response.data?.createUserBankDeposit);
        formRef.current?.reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [createDeposit, file],
  );
  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <h4>Inform Deposit</h4>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          margin: 50,
        }}
      >
        <p>PIX</p>
        <CopyToClipboard
          label="43.517.558/0001-51"
          value="43.517.558/0001-51"
          isLink={false}
        />
        <p>MULTISHOP HOLDING S.A.</p>
      </div>

      <Upload onUpload={setFile} />

      <InputUsd name="value" placeholder="USD" />

      <Input
        icon={FiLock}
        name="financial_password"
        type="password"
        placeholder="Enter your financial password"
      />

      <Button loading={loading} type="submit">
        Submit
      </Button>
    </Form>
  );
}
