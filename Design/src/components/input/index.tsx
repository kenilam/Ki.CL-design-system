import React from 'react';
import classNames from 'classnames';

// Components
import { InputGroup, InputGroupAddon } from '../input-group';

// Constants
import { CLASS_NAME as INPUT_GROUP } from '../input-group/constants';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--input';

/**
 * Text field control - API aligned with
 * https://ui.shadcn.com/docs/components/base/input
 *
 * `before` and `after` put content inside the field's border, on either side
 * of the text: it becomes an `InputGroup` with an addon each side. Every other
 * prop still goes to the `<input>`, so a `FormControl` around it reaches the
 * control; `className` goes to the outer element. Long values and
 * placeholders end in an ellipsis rather than being cut.
 */
const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ after, before, className, type = 'text', ...rest }, ref) => {
    const grouped = Boolean(before || after);

    const control = (
      <input
        ref={ref}
        type={type}
        data-slot={grouped ? 'input-group-control' : 'input'}
        className={classNames(
          CLASS_NAME,
          'kicl-font-size-small',
          grouped ? `${INPUT_GROUP}__control` : className
        )}
        {...rest}
      />
    );

    if (!grouped) {
      return control;
    }

    return (
      <InputGroup className={className}>
        {before ? (
          <InputGroupAddon align='inline-start'>{before}</InputGroupAddon>
        ) : null}
        {control}
        {after ? (
          <InputGroupAddon align='inline-end'>{after}</InputGroupAddon>
        ) : null}
      </InputGroup>
    );
  }
);

Input.displayName = 'Input';

export type { Props as InputProps } from './spec';
export { Input };
