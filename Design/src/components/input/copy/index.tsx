import React from 'react';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components';
import { InputGroup, InputGroupInput } from 'design/components/input-group';

// Partials
import { Copy } from './copy';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

type Props = Omit<
  InputProps,
  'after' | 'readOnly' | 'value' | keyof FormItemFieldProps
> &
  FormItemFieldProps & {
    value: string;
  };

const CopyInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const { before, className, disabled, style, value, ...rest } = props;
    const control = useFormItemControl(props);

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <CopyInput {...props} ref={ref} />
        </FormItem>
      );
    }

    return (
      <InputGroup className={className} disabled={disabled} style={style}>
        {before}
        <InputGroupInput
          {...rest}
          {...control}
          readOnly
          ref={ref}
          value={value}
        />
        <Copy value={value} />
      </InputGroup>
    );
  }
);

CopyInput.displayName = 'CopyInput';

export { CopyInput };
