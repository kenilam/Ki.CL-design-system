import React from 'react';

import type { MDXComponents } from 'mdx/types';

// Components
import {
  Heading,
  HyperLink,
  type HyperLinkProps,
  List,
  ListItem,
  Separator,
  Text,
} from 'design/components';

// Paths
import { useDocsPath } from 'design/docs/base';

// Partials
import { Code } from './preview/code';
import { Preview } from './preview';

/** A page links to another as `../button`, which goes from where the docs are mounted. */
const Link: React.FunctionComponent<
  Pick<HyperLinkProps, 'children'> & Pick<React.ComponentProps<'a'>, 'href'>
> = ({ children, href = '' }) => {
  const path = useDocsPath();

  return (
    <HyperLink to={href.startsWith('../') ? path(href.slice(3)) : href}>
      {children}
    </HyperLink>
  );
};

/**
 * What the Markdown in a page renders as: the design system's own
 * components, and the parts a page writes as JSX without importing them.
 * A page's headings start at `##`; its title is the component's name.
 */
const COMPONENTS: MDXComponents = {
  a: Link,
  blockquote: ({ children }) => <Text is='blockquote'>{children}</Text>,
  code: ({ children }) => <Text is='code'>{children}</Text>,
  em: ({ children }) => <Text is='em'>{children}</Text>,
  h2: ({ children }) => <Heading is='h2'>{children}</Heading>,
  h3: ({ children }) => <Heading is='h3'>{children}</Heading>,
  hr: () => <Separator />,
  // A list item is a grid, so its text needs one element to stay one line.
  li: ({ children }) => (
    <ListItem>
      <Text is='span'>{children}</Text>
    </ListItem>
  ),
  ol: ({ children }) => (
    <List gap='narrow' is='ol'>
      {children}
    </List>
  ),
  p: ({ children }) => <Text>{children}</Text>,
  // A fenced block, highlighted like a preset's code. Its child is the `code` element.
  pre: ({ children }) => (
    <Code>
      {React.isValidElement<{ children?: string }>(children)
        ? String(children.props.children ?? '')
        : String(children ?? '')}
    </Code>
  ),
  strong: ({ children }) => <Text is='strong'>{children}</Text>,
  ul: ({ children }) => <List gap='narrow'>{children}</List>,

  Preview,
};

export { COMPONENTS };
