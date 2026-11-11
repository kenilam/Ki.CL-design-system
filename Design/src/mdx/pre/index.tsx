import React from 'react';

// Partials
import { Code } from 'design/mdx/preview/code';

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

export { Pre };
