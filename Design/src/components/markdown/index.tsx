import React, { useMemo } from 'react';

// Libraries
import { Lexer, type Token } from 'marked';

// Components
import { HyperLink } from '../hyper-link';
import { Text } from '../text';

// Spec
import * as Spec from './spec';

/**
 * A token as the component that means the same thing. Anything else is shown
 * as it was written, raw HTML included, so text from a database is never
 * rendered as markup.
 */
const render = (token: Token, key: number): React.ReactNode => {
  const children =
    'tokens' in token && token.tokens ? token.tokens.map(render) : null;

  switch (token.type) {
    case 'br':
      return <br key={key} />;
    case 'codespan':
      return (
        <Text is='code' key={key}>
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
    case 'text':
      return token.text;
    case 'link':
      return (
        <HyperLink key={key} to={token.href}>
          {children}
        </HyperLink>
      );
    case 'strong':
      return (
        <Text className='kicl-font-weight-bold' is='strong' key={key}>
          {children}
        </Text>
      );
    default:
      return token.raw;
  }
};

/**
 * Inline Markdown as the design system's own components, with no element of
 * its own: it goes inside the `Text`, `Heading` or `ListItem` that holds the
 * line. Blocks (headings, lists, paragraphs) are not parsed.
 */
const Markdown: React.FunctionComponent<Spec.Props> = ({ children }) =>
  useMemo(() => Lexer.lexInline(children).map(render), [children]);

export type { Props as MarkdownProps } from './spec';
export { Markdown };
