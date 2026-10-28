import React from 'react';
import classNames from 'classnames';

// Components
import { InputGroup } from 'design/components/input-group';

// Constants
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--input';

/**
 * Text field control - API aligned with
 * https://ui.shadcn.com/docs/components/base/input
 *
 * `before` and `after` put an icon or a short text inside the field's border,
 * on either side of the text: it becomes a `label` around them and the
 * `<input>`. Every other prop still goes to the `<input>`, so a `FormControl`
 * around it reaches the control; `className` and `style` go to the outer
 * element. A field with a button is an `InputGroup`. Long values and
 * placeholders end in an ellipsis rather than being cut.
 */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ after, before, className, style, type = 'text', ...rest }, ref) => {
    const grouped = Boolean(before || after);

    const control = (
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
      />
    );

    if (!grouped) {
      return control;
    }

    return (
      <InputGroup className={className} is='label' style={style}>
        {before}
        {control}
        {after}
      </InputGroup>
    );
  }
);

Input.displayName = 'Input';

export type { Props as InputProps } from './spec';
export { Input };
