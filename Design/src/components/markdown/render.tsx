import React from 'react';

// Libraries
import type { Token, Tokens } from 'marked';

// Components
import { Heading } from 'design/components/heading';
import type { HeadingIs } from 'design/components/heading/spec';
import { HyperLink } from 'design/components/hyper-link';
import { Image } from 'design/components/image';
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';
import { Separator } from 'design/components/separator';
import { Text } from 'design/components/text';

// Spec
import type { Look } from './spec';

const LOOK = /^\{(confirm|error|info|secondary|warning)\}/;

const lookOf = (token?: Token) => {
  return token?.type === 'text'
    ? (LOOK.exec(token.text)?.[1] as Look | undefined)
    : undefined;
};

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
      case 'code':
        return (
          <Text is='pre' key={key}>
            {token.text}
          </Text>
        );
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
      case 'heading':
        return (
          <Heading is={`h${token.depth}` as HeadingIs} key={key}>
            {children}
          </Heading>
        );
      case 'hr':
        return <Separator is='hr' key={key} />;
      case 'link':
        return (
          <HyperLink key={key} to={token.href}>
            {children || null}
          </HyperLink>
        );
      case 'image':
        return <Image alt={token.text} data={token.href} key={key} />;
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
  });
};

export { render };
