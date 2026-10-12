import React, { useMemo } from 'react';

// Libraries
import { Lexer } from 'marked';

// Partials
import { render } from './render';

// Spec
import * as Spec from './spec';

/**
 * Inline Markdown as the design system's own components, with no element of
 * its own: it goes inside the `Text`, `Heading` or `ListItem` that holds the
 * line. Blocks (headings, lists, paragraphs) are not parsed.
 */
const Markdown: React.FunctionComponent<Spec.Props> = ({ children }) =>
  useMemo(() => render(Lexer.lexInline(children)), [children]);

export type { Props as MarkdownProps } from './spec';
export { Markdown };
