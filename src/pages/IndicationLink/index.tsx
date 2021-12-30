import React from 'react';
import { FiMail, FiUser } from 'react-icons/fi';
import { useHistory, useParams, Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { AnimationContainer } from './styles';
import {
  useGetValidIndicatorByUsernameQuery,
  useSendEmailVerificationTokenMutation,
} from '../../graphql/generated/graphql';
import ShimmerEffect from '../../components/Shimmer';

interface IFormData {
  email: string;
  full_name: string;
}
interface IParams {
  indicator_username: string;
}
export default function IndicationLink(): JSX.Element {
  const { indicator_username } = useParams() as IParams;
  const { data: indicator, loading: loadingIndicator } =
    useGetValidIndicatorByUsernameQuery({
      variables: { username: indicator_username },
    });

  const formRef = React.useRef<FormHandles>(null);
  const history = useHistory();
  const [sendToken, { loading }] = useSendEmailVerificationTokenMutation();
  const handleSubmit = React.useCallback(
    async (data: IFormData) => {
      try {
        formRef?.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Must be a valid e-mail')
            .required('E-mail is required'),
          full_name: Yup.string().required('Your name is required'),
          indicator_id: Yup.string().required('The indicator is required'),
        });
        await schema.validate(
          { ...data, indicator_id: indicator?.getValidIndicatorByUsername.id },
          { abortEarly: false },
        );

        if (!indicator) return;

        const response = await sendToken({
          variables: {
            email: data.email,
            full_name: data.full_name.toUpperCase(),
            indicator_id: indicator.getValidIndicatorByUsername.id,
          },
        });

        toast.success(response.data?.sendEmailVerificationToken);

        history.push('/signup');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [history, indicator, sendToken],
  );

  if (loadingIndicator) return <ShimmerEffect width={340} height={198} />;
  if (!indicator)
    return (
      <AnimationContainer
        style={{
          width: 340,
          height: 198,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
        }}
      >
        <h3>invalid link</h3>
        <Link to="/">Go to signin</Link>
      </AnimationContainer>
    );

  return (
    <AnimationContainer>
      <h4>Create account</h4>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          type="text"
          name="full_name"
          icon={FiUser}
          placeholder="Enter your full name"
        />
        <Input
          type="text"
          name="email"
          icon={FiMail}
          placeholder="Enter your e-mail"
        />

        <Button type="submit" loading={loading}>
          Submit
        </Button>
      </Form>
    </AnimationContainer>
  );
}
