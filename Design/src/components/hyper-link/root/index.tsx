import React from 'react';

// Routes
import { Link, NavLink } from 'design/router';

// Components
import { Layout } from 'design/components/layout';
import { BUTTON_LAYOUT as LAYOUT, NameHint } from 'design/components';

// Spec
import type * as Spec from 'design/components/hyper-link/spec';

// Context
import { useHyperLink } from 'design/components/hyper-link/context';

// Partials
import { getAnchorProps } from './anchor-props';
import { getLinkProps } from './link-props';
import { Contents } from './contents';
import { useAttributes } from './use-attributes';

const KINDS = {
  object: { false: 'page', true: 'section' },
  string: { false: 'page', true: 'anchor' },
} as const;

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
  const { isHash, isIcon, lookLikeButton } = useHyperLink();
  const { rest, shared } = useAttributes(props);

  // A `#id` string is a plain anchor, so the browser jumps, focuses and sets
  // `:target`. A `{ hash }` object goes through the router, which then owns
  // the history entry, with no page transition and no active state.
  const kind =
    typeof to === 'string'
      ? KINDS.string[String(isHash)]
      : KINDS.object[String(isHash)];

  const links = {
    anchor: (
      <a {...getAnchorProps(rest)} {...shared} href={String(to)} ref={ref}>
        <Contents />
      </a>
    ),
    page: (
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
    ),
    section: (
      <Link
        {...getLinkProps(rest)}
        {...shared}
        ref={ref}
        to={to}
        viewTransition={false}
      >
        <Contents />
      </Link>
    ),
  };

  const link = (
    <NameHint label={isIcon ? rest['aria-label'] : undefined}>
      {links[kind]}
    </NameHint>
  );

  if (!lookLikeButton) {
    return link;
  }

  return (
    <Layout
      {...LAYOUT}
      display='inline-grid'
      frames={frames}
      justifyContent={justifyContent}
    >
      {link}
    </Layout>
  );
};

export { Root };
