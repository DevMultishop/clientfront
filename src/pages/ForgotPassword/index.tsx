import React from 'react';
import { FiMail } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { AnimationContainer } from './styles';
import { useSendForgotPasswordEmailMutation } from '../../graphql/generated/graphql';

interface IFormData {
  email: string;
}
export default function ForgotPassword(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const history = useHistory();
  const [sendForgotEmail, { loading }] = useSendForgotPasswordEmailMutation();
  const handleSubmit = React.useCallback(
    async (data: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid e-mail')
            .required('E-mail is required'),
        });
        await schema.validate(data, { abortEarly: false });

        const response = await sendForgotEmail({
          variables: { email: data.email },
        });

        toast.success(response.data?.sendForgotPasswordEmail);

        history.push('/reset');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, sendForgotEmail],
  );
  return (
    <AnimationContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Send recovery code</h4>
        <Input
          type="email"
          name="email"
          icon={FiMail}
          placeholder="Enter your e-mail"
        />

        <Button type="submit" loading={loading}>
          Submit
        </Button>

        <Link to="/">Go back</Link>
      </Form>
    </AnimationContainer>
  );
}
