import React from 'react';

// Components
import { HyperLink, type HyperLinkProps } from 'design/components';

// Paths
import { useDocsContext } from 'design/mdx/context';

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

export { Link };
