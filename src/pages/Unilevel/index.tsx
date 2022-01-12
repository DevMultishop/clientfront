import React from 'react';
import Carousel from '../../components/Carousel';

import { Container, Line, Action } from './styles';

import Avatar from './Avatar';
import {
  useGetMeQuery,
  useGetUnilevelByUserIdQuery,
} from '../../graphql/generated/graphql';

export default function Unilevel(): JSX.Element {
  const { data: user } = useGetMeQuery();
  const user_id = user?.getMe.id;

  const { data: unilevel } = useGetUnilevelByUserIdQuery({
    variables: {
      user_id: user_id || '',
    },
  });

  console.log(unilevel);

  const handlerOnCLick = React.useCallback((id: string) => {
    console.log(id);
  }, []);
  return (
    <Container>
      <Line>
        <Carousel>
          {!unilevel && <div />}
          {unilevel?.getUnilevelByUserId.map(node => (
            <Action
              key={node.user.id}
              onClick={() => handlerOnCLick(node.user.id)}
            >
              <>
                <Avatar
                  active
                  image={`https://ui-avatars.com/api/?background=c2c2c2&color=fff&name=${node.user.full_name}`}
                />
                <div className="user-info">
                  <p>{node.user.full_name}</p>
                  <p>{node.user.email}</p>
                  <p>{node.user.phone_number}</p>
                </div>
              </>
            </Action>
          ))}
        </Carousel>
      </Line>
    </Container>
  );
}
