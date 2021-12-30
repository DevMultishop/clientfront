import React from 'react';

import { Button, Container, Content, Title, Arrow } from './styles';

interface IProps {
  title?: string;
  content: string;
  info?: string;
  children: React.ReactNode;
  noDismiss?: boolean;
  noOffset?: boolean;
}

export default function Popover({
  title = '',
  content,
  info = '',
  children,
  noDismiss = false,
  noOffset = false,
}: IProps): JSX.Element {
  const [active, setActive] = React.useState(false);

  const handlerOnClick = React.useCallback(
    e => {
      setActive(!active);
      e.preventDefault();
      e.stopPropagation();
    },
    [active, setActive],
  );

  return (
    <>
      <Button
        onClick={e => handlerOnClick(e)}
        onBlur={() => !noDismiss && setActive(false)}
      >
        {children}
      </Button>
      <Container className={`popover ${active ? 'show' : ''}`}>
        {!noOffset && <Arrow className="popover-arrow " />}
        <Title>{title}</Title>
        <Content>
          {content}
          <p className="info">{info}</p>
        </Content>
      </Container>
    </>
  );
}
