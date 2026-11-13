import React from 'react';

// Routes
import { NavLink } from 'design/router';

// Components
import { Layout } from 'design/components/layout';
import { BUTTON_LAYOUT as LAYOUT } from 'design/components';

// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Context
import { useHyperLink } from 'design/components/hyper-link/context';

// Partials
import { getAnchorProps } from './anchor-props';
import { Contents } from './contents';
import { useAttributes } from './use-attributes';

type Props = Omit<
  Spec.Props,
  'after' | 'before' | 'children' | 'lookLikeButton' | 'target'
> &
  Pick<React.ComponentProps<'a'>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({
  end = true,
  frames,
  justifyContent = LAYOUT.justifyContent,
  ref,
  to,
  viewTransition = true,
  ...props
}) => {
  const { isHash, lookLikeButton } = useHyperLink();
  const { rest, shared } = useAttributes(props);

  // A same-page hash uses a plain anchor because the router would swallow
  // the click; the browser then handles the jump and focus.
  const Link =
    isHash && typeof to === 'string' ? (
      <a {...getAnchorProps(rest)} {...shared} href={to} ref={ref}>
        <Contents />
      </a>
    ) : (
      <NavLink
        {...rest}
        {...shared}
        end={end}
        ref={ref}
        to={to}
        viewTransition={viewTransition}
      >
        <Contents />
      </NavLink>
    );

  if (!lookLikeButton) {
    return Link;
  }

  return (
    <Layout
      {...LAYOUT}
      display='inline-grid'
      frames={frames}
      justifyContent={justifyContent}
    >
      {Link}
    </Layout>
  );
};

export { Root };
