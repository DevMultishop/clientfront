/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';

import { useField } from '@unform/core';

import { FiDollarSign } from 'react-icons/fi';
import { Container, Error } from './styles';
import { formatUSD } from '../../utils/format';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  disabled?: boolean;
}

export default function InputUsd({
  name,
  disabled = false,
  ...rest
}: IProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [displaiedValue, setdisplayedValue] = React.useState('0');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, error, registerField } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container
        disabled={disabled}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        <FiDollarSign size={20} />
        <input
          ref={inputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          disabled={disabled}
          autoComplete="new-password"
          onChange={(e: any) => {
            let { value } = e.target;
            value = value.replace(/\D/g, '');
            value = value.replace(/^0/, '');
            if (value.length === 1) value = '0';
            value = [
              value.slice(0, value.length - 2),
              '.',
              value.slice(value.length - 2),
            ].join('');
            setdisplayedValue(value);
          }}
          value={formatUSD(Number(displaiedValue))}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
}
