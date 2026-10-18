import classNames from 'classnames';

import type { LayoutProps } from 'design/components/layout';

import './choice-label.scss';

/*
 * The label a checkbox, a radio or a switch sits in, with its text. One style
 * for all three: the control and its text in a row, the small text an input
 * uses, as tall as an input when it stands alone, and text a click toggles
 * rather than selects.
 */
export const CHOICE_LABEL_LAYOUT = {
  alignItems: 'center',
  autoFlow: 'column',
  display: 'inline-grid',
  gap: 'narrow',
  // Packed to the start, so a label stretched by its parent keeps its text by the control.
  justifyContent: 'start',
} as const satisfies LayoutProps;

export const CHOICE_LABEL_CLASS_NAME = classNames(
  'kicl--components--choice-label',
  'kicl-font-size-small',
  'kicl-user-select-none'
);
