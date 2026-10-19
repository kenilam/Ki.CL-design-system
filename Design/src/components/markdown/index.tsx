import React, { useMemo } from 'react';

// Libraries
import { Lexer } from 'marked';

// Partials
import { render } from './render';

// Spec
import * as Spec from './spec';

/**
 * Markdown as the design system's own components, with no element of its own.
 * One paragraph renders inline, to go inside the `Text`, `Heading` or
 * `ListItem` that holds the line. Anything more renders as blocks: headings,
 * paragraphs, lists, quotes, code blocks and rules.
 */
const Markdown: React.FunctionComponent<Spec.Props> = ({ children }) =>
  useMemo(() => {
    const tokens = Lexer.lex(children).filter(({ type }) => type !== 'space');
    const [first] = tokens;

    return render(
      tokens.length === 1 && first.type === 'paragraph' && first.tokens
        ? first.tokens
        : tokens
    );
  }, [children]);

export type { Props as MarkdownProps } from './spec';
export { Markdown };
