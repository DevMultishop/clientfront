import React, { useRef, useState, useCallback } from 'react';

import { Container, SelectContainer } from './styles';

interface IParams {
  icon: JSX.Element;
  [key: string]: any;
}

export default function Select({ icon: Icon, ...rest }: IParams): JSX.Element {
  const selectRef = useRef(null);

  const [isFocused, setIsFocused] = useState(false);
  // const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    // setIsFilled(!!selectRef.current.);
  }, []);

  return (
    <Container isFilled={false} isFocused={isFocused}>
      {Icon}

      <SelectContainer
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        classNamePrefix="react-select"
        ref={selectRef}
        {...rest}
      />
    </Container>
  );
}
