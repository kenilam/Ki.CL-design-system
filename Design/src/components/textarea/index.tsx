import React from 'react';
import classNames from 'classnames';

import type { Props } from './spec';

import './styles.scss';

const CLASS_NAME = 'kicl--components--textarea';

/**
 * Multiline text control - API aligned with
 * https://ui.shadcn.com/docs/components/base/textarea
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className, rows, style, ...rest }, ref) => (
    <textarea
      ref={ref}
      className={classNames(CLASS_NAME, 'kicl-font-size-small', className)}
      rows={rows}
      // `field-sizing: content` ignores `rows`, so the styles turn it into a
      // minimum height instead.
      style={
        rows
          ? ({ '--kicl--components--textarea--rows': rows, ...style } as never)
          : style
      }
      {...rest}
    />
  )
);

Textarea.displayName = 'Textarea';

export type { Props as TextareaProps } from './spec';
export { Textarea };
