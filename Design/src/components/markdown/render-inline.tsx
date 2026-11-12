import React from 'react';

// Libraries
import type { Token } from 'marked';

// Components
import { HyperLink, Image, Text } from 'design/components';

// Partials
import { CodeSpan } from './code-span';
import { LOOK } from './look';

const renderInline = (
  tokens: Token[],
  key: number,
  children: React.ReactNode[] | null
): React.ReactNode => {
  const token = tokens[key];

  switch (token.type) {
    case 'br':
      return <br key={key} />;
    case 'codespan':
      return <CodeSpan key={key} next={tokens[key + 1]} text={token.text} />;
    case 'del':
      return (
        <Text is='del' key={key}>
          {children}
        </Text>
      );
    case 'em':
      return (
        <Text is='em' key={key}>
          {children}
        </Text>
      );
    case 'escape':
      return token.text;
    case 'link':
      return (
        <HyperLink key={key} to={token.href}>
          {children || null}
        </HyperLink>
      );
    case 'image':
      return <Image alt={token.text} data={token.href} key={key} />;
    case 'strong':
      return (
        <Text className='kicl-font-weight-bold' is='strong' key={key}>
          {children}
        </Text>
      );
    case 'text':
      if (children) {
        return <Text key={key}>{children}</Text>;
      }

      return tokens[key - 1]?.type === 'codespan'
        ? token.text.replace(LOOK, '')
        : token.text;
    default:
      return token.raw;
  }
};

export { renderInline };
