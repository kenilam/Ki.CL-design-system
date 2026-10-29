import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';
import { truncateText } from 'design/helper';
import {
  CHOICE_LABEL_CLASS_NAME,
  CHOICE_LABEL_LAYOUT,
} from 'design/components/choice-label';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--switch';
const FIELD_CLASS_NAME = 'kicl--components--switch-field';

/**
 * `switch` is not in React's attribute list yet; an empty string still
 * renders it. Safari draws a native switch from it; `role` covers the rest.
 */
const SWITCH_ATTRIBUTE = {
  switch: '',
} as React.ComponentPropsWithoutRef<'input'>;

/**
 * Toggle switch on a native checkbox.
 *
 * Its children are its visible name, as text or a {@link SwitchLabel}. The
 * `<label>` wraps the control, so the text is its accessible name.
 */
const Switch = React.forwardRef<HTMLInputElement, Props>(
  ({ children, className, onChange, onCheckedChange, size, ...rest }, ref) => {
    const control = (
      // The thumb is its `::before`, centred on the track's block axis.
      <Layout alignItems='center' display='inline-grid' gap='none'>
        <input
          ref={ref}
          type='checkbox'
          // Native `checked` supplies the state; ARIA in HTML forbids aria-checked here.
          // oxlint-disable-next-line jsx-a11y/role-has-required-aria-props
          role='switch'
          {...SWITCH_ATTRIBUTE}
          className={classNames(
            CLASS_NAME,
            { [`${CLASS_NAME}--size--${size}`]: size },
            className
          )}
          onChange={(event) => {
            onChange?.(event);
            onCheckedChange?.(event.currentTarget.checked);
          }}
          {...rest}
        />
      </Layout>
    );

    if (!children) {
      return control;
    }

    return (
      <Layout {...CHOICE_LABEL_LAYOUT}>
        <label
          className={classNames(FIELD_CLASS_NAME, CHOICE_LABEL_CLASS_NAME)}
        >
          {control}
          {truncateText(children)}
        </label>
      </Layout>
    );
  }
);

Switch.displayName = 'Switch';

export type { Props as SwitchProps, SwitchLabelProps } from './spec';
export { SwitchLabel } from './switch-label';
export { Switch };
