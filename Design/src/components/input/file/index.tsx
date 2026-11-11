import React from 'react';

// Components
import { FormItem } from 'design/components';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components';

// Partials
import { Field } from './field';
import { Inline } from './inline';

// Styles
import './styles.scss';

export type Props = Omit<
  InputProps,
  'before' | 'type' | keyof FormItemFieldProps
> &
  FormItemFieldProps & {
    inline?: boolean;
  };

const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const { inline, ...field } = props;

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <FileInput {...props} ref={ref} />
        </FormItem>
      );
    }

    if (inline) {
      return <Inline {...field} ref={ref} />;
    }

    return <Field {...field} ref={ref} />;
  }
);

FileInput.displayName = 'FileInput';

export { FileInput };
