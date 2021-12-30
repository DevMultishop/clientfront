import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';

import { useField } from '@unform/core';

import { Container, Error } from './styles';
import Masks from './masks';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  mask?: string;
  disabled?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

export default function Input({
  name,
  mask,
  disabled = false,
  icon: Icon,
  ...rest
}: IProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

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

  const handleKeyUp = useCallback(
    e => {
      if (mask === 'phone') Masks[mask](e);
    },
    [mask],
  );

  return (
    <>
      <Container
        disabled={disabled}
        isErrored={!!error}
        isFocused={isFocused}
        isFilled={isFilled}
      >
        {Icon && <Icon size={20} />}
        <input
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleKeyUp}
          disabled={disabled}
          autoComplete="new-password"
        />
      </Container>
      {error && <Error>{error}</Error>}
    </>
  );
}
