import React from 'react';

// Libraries
import classNames from 'classnames';

// Spec
import * as Spec from './spec';

// Not in button.tsx: Fast Refresh only hot-swaps a file that exports nothing
// but components.
const CLASS_NAME = 'kicl--components--button';

const getButtonClassNames = ({
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
      [`${CLASS_NAME}--disabled`]: disabled,
      [`${CLASS_NAME}--icon`]: !unstyled && icon,
      [`${CLASS_NAME}--size--${size}`]: !unstyled ? size : null,
      [`${CLASS_NAME}--level--${level}`]: !unstyled ? level : null,
      [`${CLASS_NAME}--variant--${variant}`]: !unstyled ? variant : null,
      [`${CLASS_NAME}--unstyled`]: unstyled,
      'kicl-line-height-narrower': !unstyled,
      'kicl-text-transform-uppercase': !unstyled,
    },
    'kicl-overflow-hidden',
    className
  );
};

// CSS can't see text nodes, so without this a label beside an icon would get
// the icon-only look.
const hasText = (...nodes: React.ReactNode[]) => {
  return React.Children.toArray(nodes).some((node) => {
    return (
      (typeof node === 'string' && node.trim() !== '') ||
      typeof node === 'number'
    );
  });
};

const LAYOUT = {
  alignContent: 'center',
  alignItems: 'center',
  autoFlow: 'column',
  gap: 'narrow',
  justifyContent: 'start',
  justifyItems: 'start',
} as const;

export { CLASS_NAME, LAYOUT, getButtonClassNames, hasText };
