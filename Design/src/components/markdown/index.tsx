import React, { useMemo } from 'react';

// Libraries
import { Lexer } from 'marked';

// Partials
import { render } from './render';

// Spec
import * as Spec from './spec';

/**
 * A single paragraph renders inline, without its `<p>`, so it can sit inside a
 * `Text`, `Heading` or `ListItem`.
 */
const Markdown: React.FunctionComponent<Spec.Props> = ({ children }) => {
  return useMemo(() => {
    const tokens = Lexer.lex(children).filter(({ type }) => {
      return type !== 'space';
    });
    const [first] = tokens;

    return render(
      tokens.length === 1 && first.type === 'paragraph' && first.tokens
        ? first.tokens
        : tokens
    );
  }, [children]);
};

export type { Props as MarkdownProps } from './spec';
export { Markdown };
