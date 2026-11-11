import React, { useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Input } from 'design/components/input';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--input--range';

type Props = Omit<
  InputProps,
  'after' | 'before' | 'type' | keyof FormItemFieldProps
> &
  FormItemFieldProps;

const RangeInput = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      defaultValue,
      max = 100,
      min = 0,
      onChange,
      style,
      value,
      ...rest
    },
    ref
  ) => {
    const [moved, setMoved] = useState(defaultValue);
    const low = Number(min);
    const high = Number(max);
    const current = Number(value ?? moved ?? (low + high) / 2);

    return (
      <Input
        {...rest}
        className={classNames(CLASS_NAME, className)}
        defaultValue={defaultValue}
        max={max}
        min={min}
        onChange={(event) => {
          setMoved(event.target.value);
          onChange?.(event);
        }}
        ref={ref}
        style={
          {
            '--kicl--components--input--value': (current - low) / (high - low),
            ...style,
          } as React.CSSProperties
        }
        type='range'
        value={value}
      />
    );
  }
);

RangeInput.displayName = 'RangeInput';

export { RangeInput, type Props as RangeInputProps };
