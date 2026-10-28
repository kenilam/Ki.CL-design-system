import React from 'react';
import classNames from 'classnames';

import { FormDescription, FormLabel } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--textarea';

/**
 * Multiline text control - API aligned with
 * https://ui.shadcn.com/docs/components/base/textarea
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, description, label, rows, style, ...rest }, ref) => {
    const control = useFormItemControl({ description, ...rest });

    return (
      <>
        <FormLabel htmlFor={control.id} required={rest.required}>
          {label}
        </FormLabel>
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
        <FormDescription>{description}</FormDescription>
      </>
    );
  }
);

Textarea.displayName = 'Textarea';

export type { Props as TextareaProps } from './spec';
export { Textarea };
