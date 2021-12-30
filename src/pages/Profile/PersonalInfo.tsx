import React from 'react';
import { Form } from '@unform/web';
import { FiLock, FiPhone, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
// import Panel from '../../components/Panel';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  GetMeDocument,
  useGetMeQuery,
  useUpdateMyProfileMutation,
} from '../../graphql/generated/graphql';
import Avatar from '../../components/Avatar';

interface IFormData {
  name: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
  financial_password: string;
}

export default function PersonalInfo(): JSX.Element {
  const formRef = React.useRef<FormHandles>(null);
  const { data: me } = useGetMeQuery();

  const [updateMyProfile, { loading }] = useUpdateMyProfileMutation();
  const handleSubmit = React.useCallback(
    async (formData: IFormData) => {
      try {
        formRef?.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Full name is required'),
          phone_number: Yup.string()
            .min(14, 'Must have at least 11 digits')
            .required('Your phone number is required'),
          financial_password: Yup.string().required(
            'Financial password is required for updates',
          ),
          password: Yup.string(),
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
                    .min(8, 'Must have at least 8 characters')
                : field,
          ),
        });
        await schema.validate(formData, { abortEarly: false });

        const response = await updateMyProfile({
          variables: {
            financial_password: formData.financial_password,
            full_name: formData.name.toUpperCase(),
            phone_number: formData.phone_number,
            password: formData.password,
          },
          refetchQueries: [
            {
              query: GetMeDocument,
            },
          ],
        });
        toast.success(response.data?.updateMyProfile);
        formRef.current?.setFieldValue('financial_password', '');
        formRef.current?.setFieldValue('password', '');
        formRef.current?.setFieldValue('password_confirmation', '');
        formRef.current?.setFieldValue('name', formData.name.toUpperCase());
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef?.current?.setErrors(errors);
        }
      }
    },
    [updateMyProfile],
  );

  return (
    <div style={{ marginBottom: 48 }}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 24,
        }}
      >
        <Avatar size={120} image={me?.getMe.avatar_url || ''} />
      </div>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            name: me?.getMe.full_name,
            phone_number: me?.getMe.phone_number,
            password: '',
          }}
        >
          <Input name="name" icon={FiUserCheck} placeholder="Full name" />
          <Input
            mask="phone"
            name="phone_number"
            icon={FiPhone}
            placeholder="your phone number"
          />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="New login password - optional"
          />
          <Input
            icon={FiLock}
            name="password_confirmation"
            type="password"
            placeholder="Login password confirmation"
          />
          <Input
            icon={FiLock}
            name="financial_password"
            type="password"
            placeholder="Financial password"
          />

          <Button loading={loading} type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
    // <Panel title="Meus Dados">

    // </Panel>
  );
}
