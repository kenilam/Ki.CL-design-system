import React from 'react';

// Libraries
import type { Token, Tokens } from 'marked';

// Components
import { Heading } from 'design/components/heading';
import type { HeadingIs } from 'design/components';
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';
import { Separator } from 'design/components/separator';
import { Text } from 'design/components/text';

// Partials
import { renderInline } from './render-inline';

/**
 * Other tokens, raw HTML included, render as plain text so text from the
 * database is never rendered as markup.
 */
const render = (tokens: Token[]): React.ReactNode[] => {
  return tokens.map((token, key) => {
    const children =
      'tokens' in token && token.tokens ? render(token.tokens) : null;

    switch (token.type) {
      case 'blockquote':
        return (
          <Text is='blockquote' key={key}>
            {children}
          </Text>
        );
      case 'code':
        return (
          <Text is='pre' key={key}>
            {token.text}
          </Text>
        );
      case 'heading':
        return (
          <Heading is={`h${token.depth}` as HeadingIs} key={key}>
            {children}
          </Heading>
        );
      case 'hr':
        return <Separator is='hr' key={key} />;
      case 'list':
        return (
          <List gap='narrow' is={token.ordered ? 'ol' : 'ul'} key={key}>
            {token.items.map((item: Tokens.ListItem, index: number) => {
              return <ListItem key={index}>{render(item.tokens)}</ListItem>;
            })}
          </List>
        );
      case 'paragraph':
        return <Text key={key}>{children}</Text>;
      case 'space':
        return null;
      default:
        return renderInline(tokens, key, children);
    }
  });
};

export { render };
