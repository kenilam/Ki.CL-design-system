import React from 'react';
import classNames from 'classnames';

// Components
import { InputGroup } from 'design/components/input-group';
import { Layout } from 'design/components/layout';
import { Text } from 'design/components/text';

// Constants
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--input';

/**
 * Text field control - API aligned with
 * https://ui.shadcn.com/docs/components/base/input
 *
 * `label` puts the field's name above it, and the `label` element holds both.
 * `before` and `after` put an icon or a short text inside the field's border,
 * on either side of the text: it becomes a `label` around them and the
 * `<input>`, or a `span` inside the `label` that holds the name. Every other
 * prop still goes to the `<input>`, so a `FormControl` around it reaches the
 * control; `className` and `style` go to the outer element. A field with a
 * button is an `InputGroup`. Long values and placeholders end in an ellipsis
 * rather than being cut.
 */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ after, before, className, label, style, type = 'text', ...rest }, ref) => {
    const grouped = Boolean(before || after);
    const outer = label ? {} : { className, style };

    const control = (
      <input
        ref={ref}
        type={type}
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-overflow-hidden',
          'kicl-text-nowrap',
          grouped ? `${INPUT_GROUP}__control` : outer.className
        )}
        style={grouped ? undefined : outer.style}
        {...rest}
      />
    );

    const field = grouped ? (
      <InputGroup {...outer} is={label ? 'span' : 'label'}>
        {before}
        {control}
        {after}
      </InputGroup>
    ) : (
      control
    );

    if (!label) {
      return field;
    }

    return (
      <Layout gap='narrowest'>
        <label className={className} style={style}>
          <Text
            className={classNames(
              'kicl-font-size-small',
              'kicl-font-weight-bold',
              'kicl-padding-inline-start'
            )}
            is='span'
          >
            {label}
          </Text>
          {field}
        </label>
      </Layout>
    );
  }
);

Input.displayName = 'Input';

export type { Props as InputProps } from './spec';
export { Input };
