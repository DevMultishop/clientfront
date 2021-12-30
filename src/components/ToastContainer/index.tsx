import React from 'react';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

const Toast: React.FC<ToastContainerProps> = ({ ...rest }) => {
  return (
    <Container>
      <ToastContainer {...rest} />
    </Container>
  );
};

export default Toast;
