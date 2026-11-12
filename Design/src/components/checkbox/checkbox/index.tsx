import React from 'react';
import classNames from 'classnames';

import { Layout } from 'design/components/layout';
import { truncateText } from 'design/helper';
import {
  CHOICE_LABEL_CLASS_NAME,
  CHOICE_LABEL_LAYOUT,
} from 'design/components/choice-label';

import type { Props } from 'design/components/checkbox/spec';

import { useControl } from './use-control';

import './styles.scss';

const CLASS_NAME = 'kicl--components--checkbox';

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      checked,
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
    const control = useControl({
      checked,
      disabled,
      name,
      onChange,
      onCheckedChange,
      ref,
      value,
    });

    const input = (
      <input
        ref={control.ref}
        type='checkbox'
        className={classNames(
          CLASS_NAME,
          'kicl-display-inline-grid',
          className
        )}
        checked={control.checked}
        disabled={disabled}
        name={control.name}
        onChange={control.onChange}
        value={value}
        {...rest}
      />
    );

    if (!children) {
      return input;
    }

    return (
      <Layout {...CHOICE_LABEL_LAYOUT}>
        <label
          className={classNames(
            `${CLASS_NAME}__label`,
            CHOICE_LABEL_CLASS_NAME
          )}
        >
          {input}
          {truncateText(children)}
        </label>
      </Layout>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export { Checkbox };
