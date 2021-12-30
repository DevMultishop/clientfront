import React from 'react';
import { Form } from '@unform/web';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { AnimationContainer } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useCreateUserSessionMutation } from '../../graphql/generated/graphql';
import { useAuth } from '../../hooks/Auth';
import client from '../../services/apollo';

interface IFormData {
  email: string;
  password: string;
}

export default function SignIn(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const { setToken } = useAuth();

  const [createSession, { loading }] = useCreateUserSessionMutation();
  const handleSubmit = React.useCallback(
    async (data: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid e-mail')
            .required('E-mail is required'),
          password: Yup.string().required('Password is resquired'),
        });
        await schema.validate(data, { abortEarly: false });

        const response = await createSession({
          variables: { password: data.password, username: data.email },
        });
        await client.clearStore();
        setToken(response.data?.createUserSession.token || null);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [createSession, setToken],
  );
  return (
    <AnimationContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Login</h4>
        <Input name="email" icon={FiMail} placeholder="enter your e-mail" />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="enter your login password"
        />
        <Button loading={loading} type="submit">
          Login
        </Button>

        <Link to="/forgot">Login password recovery</Link>
      </Form>
    </AnimationContainer>
  );
}
