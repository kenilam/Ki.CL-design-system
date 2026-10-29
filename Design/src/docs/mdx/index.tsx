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
import { useDocsContext } from 'design/docs/context';

// Partials
import { Code } from './preview/code';
import { Preview } from './preview';

/** MDX pages link to each other as `../button`, relative to the docs' mount. */
const Link: React.FunctionComponent<
  Pick<HyperLinkProps, 'children'> & Pick<React.ComponentProps<'a'>, 'href'>
> = ({ children, href = '' }) => {
  const { parsePath } = useDocsContext();

  return (
    <HyperLink to={href.startsWith('../') ? parsePath(href.slice(3)) : href}>
      {children}
    </HyperLink>
  );
};

const Pre: React.FunctionComponent<
  Pick<React.ComponentProps<typeof Code>, 'className'> &
    Pick<React.ComponentProps<'pre'>, 'children'>
> = ({ children, className }) => {
  return (
    <Code className={className}>
      {React.isValidElement<{ children?: string }>(children)
        ? String(children.props.children ?? '')
        : String(children ?? '')}
    </Code>
  );
};

/**
 * No `h1`: a page's headings start at `##`, since its title is the
 * component's name.
 */
const COMPONENTS: MDXComponents = {
  a: Link,
  blockquote: ({ children }) => {
    return <Text is='blockquote'>{children}</Text>;
  },
  code: ({ children }) => {
    return <Text is='code'>{children}</Text>;
  },
  em: ({ children }) => {
    return <Text is='em'>{children}</Text>;
  },
  h2: ({ children }) => {
    return <Heading is='h2'>{children}</Heading>;
  },
  h3: ({ children }) => {
    return <Heading is='h3'>{children}</Heading>;
  },
  hr: () => {
    return <Separator />;
  },
  // A list item is a grid, so its text needs one element to stay one line.
  li: ({ children }) => {
    return (
      <ListItem>
        <Text is='span'>{children}</Text>
      </ListItem>
    );
  },
  ol: ({ children }) => {
    return (
      <List gap='narrow' is='ol'>
        {children}
      </List>
    );
  },
  p: ({ children }) => {
    return <Text>{children}</Text>;
  },
  pre: ({ children }) => {
    return <Pre className='kicl-min-block-size-columns-2'>{children}</Pre>;
  },
  strong: ({ children }) => {
    return <Text is='strong'>{children}</Text>;
  },
  ul: ({ children }) => {
    return <List gap='narrow'>{children}</List>;
  },

  Preview,
};

export { COMPONENTS, Pre };
