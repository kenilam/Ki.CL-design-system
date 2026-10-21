import React from 'react';

// Components
import { getHyperLinkClassNames } from 'design/components/hyper-link/class-names';
import { Layout } from 'design/components/layout';
import { truncateText } from 'design/helper';

// Spec
import * as Spec from './spec';

// Class names
import { LAYOUT, getButtonClassNames, hasText } from './class-names';

// Styles
import './styles.scss';
import './styles.size.scss';
import './styles.variant.scss';
import './styles.disabled.scss';

const Button = React.forwardRef<HTMLButtonElement, Spec.Props>(
  (
    {
      after,
      before,
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
    const className = lookLikeHyperLink
      ? getHyperLinkClassNames({ className: _className, unstyled })
      : getButtonClassNames({
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
          {truncateText(before)}
          {truncateText(children)}
          {truncateText(after)}
        </button>
      </Layout>
    );
  }
);

Button.displayName = 'Button';

export { Button };
