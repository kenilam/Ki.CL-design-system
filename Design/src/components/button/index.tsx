import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { getHyperLinkClassNames, Layout } from '..';

// Spec
import * as Spec from './spec';

// Class names
import { CLASS_NAME, getButtonClassNames } from './class-names';

// Styles
import './styles.scss';
import './styles.level.scss';
import './styles.size.scss';
import './styles.variant.scss';

const isText = (child: React.ReactNode) =>
  (typeof child === 'string' && child.trim() !== '') ||
  typeof child === 'number';

/*
 * Text beside an element goes in a span. The icon-button look is chosen in CSS
 * by what elements a button holds, and CSS can't see a text node, so without
 * it a label beside an icon or a spinner reads as an icon button and goes
 * round. Text on its own stays bare.
 */
const label = (children: React.ReactNode) => {
  const items = React.Children.toArray(children);

  if (!items.some(React.isValidElement)) {
    return children;
  }

  return React.Children.map(children, (child) =>
    isText(child) ? <span>{child}</span> : child
  );
};

const Button = React.forwardRef<HTMLButtonElement, Spec.Props>(
  (
    {
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

      alignContent = 'center',
      alignItems = 'center',
      autoFlow = 'column',
      gap = 'narrow',
      justifyContent = 'start',
      justifyItems = 'start',

      ...rest
    },
    ref
  ) => {
    const className = classNames({
      [getButtonClassNames({
        bold,
        className: _className,
        disabled,
        size,
        level,
        variant,
        unstyled,
      })]: !lookLikeHyperLink,
      [getHyperLinkClassNames()]: lookLikeHyperLink && !unstyled,
      [`${CLASS_NAME}--look-like-hyperlink`]: lookLikeHyperLink && !unstyled,
    });

    return (
      <Layout
        alignContent={alignContent}
        alignItems={alignItems}
        autoFlow={autoFlow}
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
          {label(children)}
        </button>
      </Layout>
    );
  }
);

Button.displayName = 'Button';

type ButtonProps = Spec.Props;

type GetButtonClassNamesProps = Spec.GetButtonClassNamesProps;

export { Button, type ButtonProps, type GetButtonClassNamesProps };
