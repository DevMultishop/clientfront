import React from 'react';
import { Form } from '@unform/web';
import { FiLock, FiHash } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useResetUserLoginPasswordMutation } from '../../graphql/generated/graphql';

interface IFormData {
  password: string;
  password_confirmation: string;
  verification_code: string;
}

export default function ResetPassword(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const history = useHistory();
  const [resetPassword, { loading }] = useResetUserLoginPasswordMutation();
  const handleSubmit = React.useCallback(
    async (data: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string()
            .min(8, 'Must have at least 8 caracteres')
            .required('the password is required'),
          password_confirmation: Yup.string().when(
            'password',
            (password, field) =>
              password
                ? field
                    .required('A confirmação da senha é obrigatória')
                    .oneOf(
                      [Yup.ref('password')],
                      'A senha e a confirmação devem ser iguais',
                    )
                : field,
          ),
          verification_code: Yup.string().uuid('invalid code'),
        });
        await schema.validate(data, { abortEarly: false });

        const response = await resetPassword({
          variables: {
            password: data.password,
            verification_code: data.verification_code,
          },
        });

        toast.success(response.data?.resetUserLoginPassword);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, resetPassword],
  );
  return (
    <AnimationContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Login password update</h4>
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Enter your new login password"
        />
        <Input
          icon={FiLock}
          name="password_confirmation"
          type="password"
          placeholder="Password confirmation"
        />
        <Input
          name="verification_code"
          icon={FiHash}
          placeholder="The code you received by e-mail"
        />
        <Button loading={loading} type="submit">
          Submit
        </Button>

        <Link to="/">Go to signin</Link>
      </Form>
    </AnimationContainer>
  );
}
