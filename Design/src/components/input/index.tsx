import React from 'react';
import classNames from 'classnames';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';
import { InputGroup } from 'design/components/input-group';

// Constants
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--input';

/**
 * Text field control.
 *
 * `before` and `after` put an icon or a short text inside the field's border,
 * on either side of the text: it becomes a `label` around them and the
 * `<input>`. Every other prop still goes to the `<input>`, so a `FormControl`
 * around it reaches the control; `className` and `style` go to the outer
 * element. A field with a button is an `InputGroup`. Long values and
 * placeholders end in an ellipsis rather than being cut.
 */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const control = useFormItemControl(props);

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <Input {...props} ref={ref} />
        </FormItem>
      );
    }

    const { after, before, className, style, type = 'text', ...rest } = props;
    const grouped = Boolean(before || after);

    const input = (
      <input
        ref={ref}
        type={type}
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          'kicl-overflow-hidden',
          'kicl-text-nowrap',
          grouped ? `${INPUT_GROUP}__control` : className
        )}
        style={grouped ? undefined : style}
        {...rest}
        {...control}
      />
    );

    if (!grouped) {
      return input;
    }

    return (
      <InputGroup
        className={classNames(
          {
            'kicl-padding-inline-end-narrow': after,
            'kicl-padding-inline-start-narrow': before,
          },
          className
        )}
        is='label'
        style={style}
      >
        {before}
        {input}
        {after}
      </InputGroup>
    );
  }
);

Input.displayName = 'Input';

export type { Props as InputProps } from './spec';
export { Input };
