import React from 'react';
import { useGetMeQuery } from '../../graphql/generated/graphql';

import Avatar from '../Avatar';

import { HContainer, UserInfos } from './styles';

export default function UserInforCard(): JSX.Element {
  const { data } = useGetMeQuery();
  return (
    <HContainer>
      <UserInfos>
        <h3>{data?.getMe.full_name}</h3>
        <p>{data?.getMe.email}</p>
      </UserInfos>

      <Avatar image={data?.getMe.avatar_url || ''} />
    </HContainer>
  );
}
