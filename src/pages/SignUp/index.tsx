import React from 'react';
import { Form } from '@unform/web';
import { FiLock, FiUserCheck, FiPhone, FiHash } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import { AnimationContainer, CheckBoxContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { useCreateUserMutation } from '../../graphql/generated/graphql';
import Terms from './Terms';
import CheckBox from '../../components/CheckBox';

interface IFormData {
  username: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  email_verification_id: string;
}

export default function SignUp(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const history = useHistory();
  const [createUser, { loading }] = useCreateUserMutation();
  const handleSubmit = React.useCallback(
    async (data: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string()
            .min(4, 'Must have at least 4 characters')
            .required('The nickname is required'),
          phone_number: Yup.string()
            .min(14, 'Must have at least 11 digitos')
            .required('The phone number is required'),
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
                      'The password and password confirmation must be the same',
                    )
                : field,
          ),
          email_verification_id: Yup.string().uuid('Invalid code'),
          terms: Yup.bool().oneOf([true], 'The terms are required'),
        });
        await schema.validate(data, { abortEarly: false });

        const response = await createUser({
          variables: {
            password: data.password,
            username: data.username,
            email_verification_id: data.email_verification_id,
            phone_number: data.phone_number,
          },
        });

        toast.success(response.data?.createUser);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [createUser, history],
  );
  return (
    <AnimationContainer>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h4>Fill in the details below to create your account</h4>
        <Input
          name="username"
          icon={FiUserCheck}
          placeholder="Enter a nickname"
        />
        <Input
          mask="phone"
          name="phone_number"
          icon={FiPhone}
          placeholder="Enter your phone number"
        />
        <Input
          icon={FiLock}
          name="password"
          type="password"
          placeholder="Enter a strong password"
        />
        <Input
          icon={FiLock}
          name="password_confirmation"
          type="password"
          placeholder="Repeat your password"
        />
        <Input
          name="email_verification_id"
          icon={FiHash}
          placeholder="The code you received by e-mail"
        />

        {isVisible && <Terms />}

        <CheckBoxContent>
          <CheckBox name="terms">
            <p>I have readed and accepted the</p>
          </CheckBox>
          <button type="button" onClick={() => setIsVisible(!isVisible)}>
            TERMS
          </button>
        </CheckBoxContent>

        <Button loading={loading} type="submit">
          SignUP
        </Button>

        <Link to="/">Go to Login</Link>
      </Form>
    </AnimationContainer>
  );
}
