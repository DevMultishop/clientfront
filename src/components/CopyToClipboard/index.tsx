import React, { useState } from 'react';

import { FiLink, FiCopy } from 'react-icons/fi';

import { Container, Button } from './styles';

interface IProps {
  value: string;
  label: string;
  isLink: boolean;
  message?: string;
}

export default function CopyToClipboard({
  value,
  label,
  isLink,
  message = 'Copied to clipboard',
}: IProps): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <Container className="copy-to-clipboard">
      <Button
        type="button"
        onClick={() => {
          setActive(true);
          navigator.clipboard.writeText(value);
          setTimeout(() => {
            setActive(false);
          }, 2000);
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {label}
          {isLink && <FiLink size={20} style={{ marginLeft: 4 }} />}
          {!isLink && <FiCopy size={20} style={{ marginLeft: 4 }} />}

          <span className={active ? 'active' : ''}>{message}</span>
        </div>
      </Button>
    </Container>
  );
}
