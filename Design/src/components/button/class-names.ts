import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

/*
 * Kept out of the component's file: React Fast Refresh only hot-swaps a
 * file that exports nothing but components.
 */
const CLASS_NAME = 'kicl--components--button';

const getButtonClassNames = ({
  bold,
  className = '',
  disabled,
  icon,
  level,
  size,
  unstyled,
  variant = 'primary',
}: Spec.GetButtonClassNamesProps = {}) => {
  return classNames(
    CLASS_NAME,
    {
      [`${CLASS_NAME}--bold`]: !unstyled && bold,
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--icon`]: !unstyled && icon,
      [`${CLASS_NAME}--size--${size}`]: !unstyled && size,
      [`${CLASS_NAME}--level--${level}`]: !unstyled && level,
      [`${CLASS_NAME}--variant--${variant}`]: !unstyled && variant,
      [`${CLASS_NAME}--unstyled`]: unstyled,
      'kicl-line-height-narrower': !unstyled,
      'kicl-text-transform-uppercase': !unstyled,
    },
    className
  );
};

/**
 * Whether any of these is text. CSS picks the round icon-button look by the
 * elements a button holds, and it can't see a text node: a label beside an
 * icon would read as an icon alone. So the text is found here, and the look
 * is only offered to a button without any (`--icon`).
 */
const hasText = (...nodes: React.ReactNode[]) =>
  React.Children.toArray(nodes).some(
    (node) =>
      (typeof node === 'string' && node.trim() !== '') ||
      typeof node === 'number'
  );

/**
 * How a button lays out what it holds. `HyperLink` with `lookLikeButton` uses
 * the same, so an icon sits as far from the label in either.
 */
const LAYOUT = {
  alignContent: 'center',
  alignItems: 'center',
  autoFlow: 'column',
  gap: 'narrow',
  justifyContent: 'start',
  justifyItems: 'start',
} as const;

export { CLASS_NAME, LAYOUT, getButtonClassNames, hasText };
