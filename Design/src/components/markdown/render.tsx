import React from 'react';

// Libraries
import type { Token } from 'marked';

// Components
import { HyperLink } from 'design/components/hyper-link';
import { Text } from 'design/components/text';

// Spec
import type { Look } from './spec';

/** `{secondary}` or `{warning}` straight after a code span, which Markdown has no way to say. */
const LOOK = /^\{(confirm|error|info|secondary|warning)\}/;

const lookOf = (token?: Token) =>
  token?.type === 'text'
    ? (LOOK.exec(token.text)?.[1] as Look | undefined)
    : undefined;

/**
 * Tokens as the components that mean the same thing. Anything else is shown
 * as it was written, raw HTML included, so text from a database is never
 * rendered as markup.
 */
const render = (tokens: Token[]): React.ReactNode[] =>
  tokens.map((token, key) => {
    const children = 'tokens' in token && token.tokens && render(token.tokens);

    switch (token.type) {
      case 'br':
        return <br key={key} />;
      case 'codespan': {
        const look = lookOf(tokens[key + 1]);

        return look === 'secondary' ? (
          <Text is='code' key={key} variant='secondary'>
            {token.text}
          </Text>
        ) : (
          <Text level={look} is='code' key={key}>
            {token.text}
          </Text>
        );
      }
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
      case 'strong':
        return (
          <Text className='kicl-font-weight-bold' is='strong' key={key}>
            {children}
          </Text>
        );
      case 'text':
        // The look belongs to the code before it, and is not part of the text.
        return tokens[key - 1]?.type === 'codespan'
          ? token.text.replace(LOOK, '')
          : token.text;
      default:
        return token.raw;
    }
  });

export { render };
