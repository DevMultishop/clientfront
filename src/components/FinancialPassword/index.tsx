import React from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';

import { FiHash, FiLock } from 'react-icons/fi';
import { toast } from 'react-toastify';
import Modal from '../Modal';
import Button from '../Button';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../Input';
import { CodeDiv } from './styles';
import {
  GetHasFinancialPasswordDocument,
  useCreateOrUpdateMyFinancialPasswordMutation,
  useGetHasFinancialPasswordQuery,
  useSendFinancialPasswordEmailMutation,
} from '../../graphql/generated/graphql';
import ShimmerEffect from '../Shimmer';

interface IFormData {
  password: string;
  password_confirmation: string;
  email_verification_id: string;
}
export default function FinancialPassword(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const [sendFinancialCode, { loading: loadingSendCode }] =
    useSendFinancialPasswordEmailMutation();
  const { data: hasFinancialPassword, loading: loadingHasFinancialPassword } =
    useGetHasFinancialPasswordQuery();
  const [sendCode, setSendCode] = React.useState(true);
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
                    .required('The password confimation is required')
                    .oneOf(
                      [Yup.ref('password')],
                      'Password and password confirmation must be the same',
                    )
                : field,
          ),
          email_verification_id: Yup.string().uuid('Invalid code'),
        });
        await schema.validate(formData, { abortEarly: false });
        const response = await createFinancialPassword({
          variables: {
            password: formData.password,
            verification_code: formData.email_verification_id,
          },
          refetchQueries: [
            {
              query: GetHasFinancialPasswordDocument,
            },
          ],
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
    <Modal
      isOpen={
        !loadingHasFinancialPassword &&
        !hasFinancialPassword?.getHasFinancialPassword
      }
    >
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Create your financial password</h4>
        <p>
          Create a secure password to validate your financial transactions, this
          password should be different from the login password.
        </p>

        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Your strong financial password"
        />
        <Input
          icon={FiLock}
          name="password_confirmation"
          type="password"
          placeholder="Password confirmation"
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
            Click here to receive the code via email
          </CodeDiv>
        )}

        <Input
          name="email_verification_id"
          icon={FiHash}
          placeholder="The code received by email"
        />

        <Button loading={loading} type="submit">
          Send
        </Button>
      </Form>

      {/* <Button
        className="close-button"
        type="button"
        onClick={() => {
          setOpenModal(false);
        }}
      >
        Fechar
      </Button> */}
    </Modal>
  );
}
