import React from 'react';

// Libraries
import type { Token, Tokens } from 'marked';

// Components
import { Text } from 'design/components/text';

// Partials
import { lookOf } from 'design/components/markdown/look';

type Props = Pick<Tokens.Codespan, 'text'> & {
  next?: Token;
};

const CodeSpan: React.FunctionComponent<Props> = ({ next, text }) => {
  const look = lookOf(next);

  if (look === 'secondary') {
    return (
      <Text is='code' variant='secondary'>
        {text}
      </Text>
    );
  }

  return (
    <Text level={look} is='code'>
      {text}
    </Text>
  );
};

export { CodeSpan };
