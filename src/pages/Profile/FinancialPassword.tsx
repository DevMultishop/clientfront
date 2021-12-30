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
  useCreateOrUpdateMyFinancialPasswordMutation,
  useSendFinancialPasswordEmailMutation,
} from '../../graphql/generated/graphql';
import { CodeDiv } from '../../components/FinancialPassword/styles';

interface IFormData {
  password: string;
  password_confirmation: string;
  email_verification_id: string;
}

export default function FinancialPassword(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const [sendCode, setSendCode] = React.useState(true);
  const [sendFinancialCode, { loading: loadingSendCode }] =
    useSendFinancialPasswordEmailMutation();

  const [createFinancialPassword, { loading }] =
    useCreateOrUpdateMyFinancialPasswordMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          password: Yup.string()
            .min(8, 'Must have at least 8 characters')
            .required('The password is required'),
          password_confirmation: Yup.string().when(
            'password',
            (password, field) =>
              password
                ? field
                    .required('The password confirmation is required')
                    .oneOf(
                      [Yup.ref('password')],
                      'The password ans password confirmation must be the same',
                    )
                : field,
          ),
          email_verification_id: Yup.string().uuid('invalid code'),
        });
        await schema.validate(formData, { abortEarly: false });
        const response = await createFinancialPassword({
          variables: {
            password: formData.password,
            verification_code: formData.email_verification_id,
          },
        });
        toast.success(response.data?.createOrUpdateMyFinancialPassword);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [createFinancialPassword],
  );
  return (
    <Panel title="Your financial password">
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="New financial password"
        />
        <Input
          icon={FiLock}
          name="password_confirmation"
          type="password"
          placeholder="Financial password confirmation"
        />

        {loadingSendCode && (
          <p>
            <ShimmerEffect />
          </p>
        )}
        {!loadingSendCode && (
          <CodeDiv
            onClick={() => {
              if (sendCode)
                sendFinancialCode().then(r => {
                  toast.success(r.data?.sendFinancialPasswordEmail);
                  setSendCode(false);
                  setTimeout(() => setSendCode(true), 30000);
                });
            }}
          >
            Click here to receive the code by e-mail
          </CodeDiv>
        )}

        <Input
          name="email_verification_id"
          icon={FiHash}
          placeholder="Enter the code received by e-mail"
        />

        <Button loading={loading} type="submit">
          Submit
        </Button>
      </Form>
    </Panel>
  );
}
