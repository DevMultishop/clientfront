import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface IProps {
  name: string;
  children: React.ReactNode;
}

export default function CheckBox({
  name,
  children,
  ...rest
}: IProps): JSX.Element {
  const inputRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container isErrored={!!error} isFocused={isFocused}>
        {children}

        <input
          type="checkbox"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />

        <span />
      </Container>
    </>
  );
}
