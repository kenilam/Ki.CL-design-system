import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';
import {
  CHOICE_LABEL_CLASS_NAME,
  CHOICE_LABEL_LAYOUT,
} from 'design/components/choice-label';
import { mergeRefs } from 'design/helper';

import type { Props } from './spec';

import { useCheckboxGroup } from './context';

import './styles.scss';

const CLASS_NAME = 'kicl--components--checkbox';

/**
 * Native checkbox - API aligned with
 * https://ui.shadcn.com/docs/components/base/checkbox
 *
 * `indeterminate` has no HTML attribute, so it is set on the element.
 * Children are its visible label, laid out as a radio's is. With a `value`
 * inside a `CheckboxGroup`, the group holds whether it is checked.
 */
const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      checked: own,
      children,
      className,
      disabled,
      name,
      onChange,
      onCheckedChange,
      value,
      ...rest
    },
    ref
  ) => {
    const group = useCheckboxGroup();
    const item = group && value !== undefined ? String(value) : undefined;

    const { register } = group ?? {};

    useEffect(
      () =>
        item === undefined ? undefined : register?.(item, Boolean(disabled)),
      [disabled, item, register]
    );

    const checked =
      item === undefined ? own : Boolean(group?.value.includes(item));
    const isIndeterminate = checked === 'indeterminate';

    const setRef = useCallback(
      (node: HTMLInputElement | null) => {
        if (node) {
          node.indeterminate = isIndeterminate;
        }
        mergeRefs(ref)(node);
      },
      [isIndeterminate, ref]
    );

    const control = (
      <input
        ref={setRef}
        type='checkbox'
        className={classNames(
          CLASS_NAME,
          'kicl-display-inline-grid',
          className
        )}
        checked={checked === undefined ? undefined : checked === true}
        disabled={disabled}
        name={item === undefined ? name : group?.name}
        onChange={(event) => {
          onChange?.(event);
          onCheckedChange?.(event.currentTarget.checked);

          if (item !== undefined) {
            group?.onCheck(item, event.currentTarget.checked);
          }
        }}
        value={value}
        {...rest}
      />
    );

    if (!children) {
      return control;
    }

    return (
      <Layout {...CHOICE_LABEL_LAYOUT}>
        <label className={CHOICE_LABEL_CLASS_NAME}>
          {control}
          {children}
        </label>
      </Layout>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
