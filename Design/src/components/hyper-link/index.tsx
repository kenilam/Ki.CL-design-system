import React from 'react';

// Routes
import { NavLink } from 'react-router-dom';

// Components
import { Layout } from '../layout';
import { LAYOUT, getButtonClassNames, hasText } from '../button/class-names';

// Hooks
import { useURLStatus } from './hooks';

// Spec
import * as Spec from './spec';

// Class names
import { CLASS_NAME, getHyperLinkClassNames } from './class-names';

// Styles
import './styles.scss';

const NEW_TAB = '(opens in a new tab)';

/** Drops the router-only props a native anchor would render as attributes. */
const getAnchorProps = ({
  caseSensitive: _caseSensitive,
  discover: _discover,
  preventScrollReset: _preventScrollReset,
  relative: _relative,
  reloadDocument: _reloadDocument,
  replace: _replace,
  state: _state,
  style,
  viewTransition: _viewTransition,
  ...rest
}: Omit<Spec.Props, 'children' | 'to'>) => ({
  ...rest,
  style: typeof style === 'function' ? undefined : style,
});

const HyperLink = React.forwardRef<HTMLAnchorElement, Spec.Props>(
  (
    {
      after,
      before,
      bold,
      children,
      className: _className = '',
      disabled,
      end = true,
      level,
      lookLikeButton,
      target: _target,
      onClick: clickHandler,
      size,
      to,
      variant,
      unstyled,
      ...rest
    },
    ref
  ) => {
    const status = useURLStatus(to);

    const onClick: Spec.Props['onClick'] = (event) => {
      if (disabled) {
        event.preventDefault();
        return;
      }

      clickHandler?.(event);
    };

    // One look at a time: the classes of a button or of a link, never both.
    const className = lookLikeButton
      ? getButtonClassNames({
          bold,
          className: _className,
          disabled,
          icon: !hasText(before, children, after),
          level,
          size,
          variant,
        })
      : getHyperLinkClassNames({ className: _className, unstyled });

    let target: Spec.Props['target'] = _target;

    if (status.isExternal) {
      target = '_blank';
    }

    let Content = children;

    if (after || before) {
      Content = (
        <>
          {before}
          {/* A link underlines its text and not the icons beside it, so the text needs an element. */}
          {lookLikeButton ? (
            (children as React.ReactNode)
          ) : (
            <span className={`${CLASS_NAME}--line`}>
              {children as React.ReactNode}
            </span>
          )}
          {after}
        </>
      );
    }

    if (target === '_blank') {
      Content = (
        <>
          {Content}
          <span className='kicl-hidden'> {NEW_TAB}</span>
        </>
      );
    }

    const shared = {
      'aria-disabled': disabled,
      className,
      onClick,
      tabIndex: disabled ? -1 : undefined,
      target,
    };

    /*
     * A same-page hash is a plain anchor, so the browser jumps and moves focus
     * itself; the router would swallow the click. Smooth scrolling and the
     * header offset are CSS (see `styles.scss` and `html { scroll-padding }`).
     */
    const Link =
      status.isHash && typeof to === 'string' ? (
        <a {...getAnchorProps(rest)} {...shared} href={to} ref={ref}>
          {Content as React.ReactNode}
        </a>
      ) : (
        <NavLink {...rest} {...shared} end={end} ref={ref} to={to}>
          {Content}
        </NavLink>
      );

    if (lookLikeButton) {
      return (
        // Inline, as a link is: it sits in a line of text without breaking it.
        <Layout {...LAYOUT} display='inline-grid'>
          {Link}
        </Layout>
      );
    }

    return Link;
  }
);

HyperLink.displayName = 'HyperLink';

type HyperLinkProps = Spec.Props;

type GetHyperLinkClassNamesProps = Spec.GetHyperLinkClassNamesProps;

export { HyperLink, type GetHyperLinkClassNamesProps, type HyperLinkProps };
