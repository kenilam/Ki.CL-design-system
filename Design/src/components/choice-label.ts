import classNames from 'classnames';

import type { LayoutProps } from 'design/components/layout';

import './choice-label.scss';

export const CHOICE_LABEL_LAYOUT = {
  alignItems: 'center',
  autoFlow: 'column',
  display: 'inline-grid',
  gap: 'narrow',
  // So a label stretched by its parent keeps its text next to the control.
  justifyContent: 'start',
} as const satisfies LayoutProps;

export const CHOICE_LABEL_CLASS_NAME = classNames(
  'kicl--components--choice-label',
  'kicl-font-size-small',
  'kicl-user-select-none'
);
