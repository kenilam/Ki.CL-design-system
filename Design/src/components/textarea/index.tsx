import React from 'react';
import classNames from 'classnames';

import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--textarea';

/**
 * Multiline text control.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
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
          <Textarea {...props} ref={ref} />
        </FormItem>
      );
    }

    const { className, rows, style, ...rest } = props;

    return (
      <textarea
        ref={ref}
        className={classNames(CLASS_NAME, 'kicl-font-size-small', className)}
        rows={rows}
        // `field-sizing: content` ignores `rows`, so the styles turn it into a
        // minimum height instead.
        style={
          rows
            ? ({
                '--kicl--components--textarea--rows': rows,
                ...style,
              } as never)
            : style
        }
        {...rest}
        {...control}
      />
    );
  }
);

Textarea.displayName = 'Textarea';

export type { Props as TextareaProps } from './spec';
export { Textarea };
