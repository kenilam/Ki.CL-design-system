// Libraries
import classNames from 'classnames';

export const FRAME = classNames(
  'kicl-background-color-grey-700',
  'kicl-border-radius-xs',
  'kicl-contain-paint',
  'kicl-position-relative'
);

export const BLOCK = classNames(
  'kicl-background-color-blue',
  'kicl-border-radius-xs',
  'kicl-padding-narrow'
);

export const MOTION = classNames(
  'kicl--docs--motion',
  'kicl-background-color-grey-200',
  'kicl-border-radius-xs',
  'kicl-display-flex',
  'kicl-inline-size-columns-6',
  'kicl-padding-narrower'
);

export const DOT = classNames(
  BLOCK,
  'kicl--docs--motion__dot',
  'kicl-animation-none-reduced-motion'
);
