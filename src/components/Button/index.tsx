import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type IProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  loading?: boolean;
  size?: 'large' | 'default';
};

export default function Button({
  loading = false,
  children,
  size = 'default',
  ...rest
}: IProps): JSX.Element {
  return (
    <Container size={size} isLoading={loading} type="button" {...rest}>
      {children}
    </Container>
  );
}
