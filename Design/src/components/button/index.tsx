import React from 'react';

// Components
import { getHyperLinkClassNames } from '../hyper-link/class-names';
import { Layout } from '../layout';

// Spec
import * as Spec from './spec';

// Class names
import { LAYOUT, getButtonClassNames, hasText } from './class-names';

// Styles
import './styles.scss';
import './styles.level.scss';
import './styles.size.scss';
import './styles.variant.scss';

const Button = React.forwardRef<HTMLButtonElement, Spec.Props>(
  (
    {
      after,
      before,
      bold,
      children,
      className: _className = '',
      disabled,
      level,
      lookLikeHyperLink = false,
      onClick: clickHandler,
      size,
      type = 'button',
      unstyled,
      variant = 'primary',

      alignContent = LAYOUT.alignContent,
      alignItems = LAYOUT.alignItems,
      autoFlow = LAYOUT.autoFlow,
      gap = LAYOUT.gap,
      justifyContent = LAYOUT.justifyContent,
      justifyItems = LAYOUT.justifyItems,

      ...rest
    },
    ref
  ) => {
    // One look at a time: the classes of a link or of a button, never both.
    const className =
      lookLikeHyperLink && !unstyled
        ? getHyperLinkClassNames({ className: _className })
        : getButtonClassNames({
            bold,
            className: _className,
            disabled,
            icon: !hasText(before, children, after),
            level,
            size,
            unstyled,
            variant,
          });

    return (
      <Layout
        alignContent={alignContent}
        alignItems={alignItems}
        autoFlow={autoFlow}
        // A link sits in a line of text, so it must not start a line of its own.
        display={lookLikeHyperLink ? 'inline-grid' : undefined}
        gap={gap}
        justifyContent={justifyContent}
        justifyItems={justifyItems}
      >
        <button
          {...rest}
          className={className}
          disabled={disabled}
          onClick={clickHandler}
          ref={ref}
          type={type}
        >
          {before}
          {children}
          {after}
        </button>
      </Layout>
    );
  }
);

Button.displayName = 'Button';

type ButtonProps = Spec.Props;

type GetButtonClassNamesProps = Spec.GetButtonClassNamesProps;

export { Button, type ButtonProps, type GetButtonClassNamesProps };
