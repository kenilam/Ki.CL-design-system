import React from 'react';

// Components
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components/form/context';
import {
  InputGroup,
  InputGroupButton,
  InputGroupInput,
} from 'design/components/input-group';

// Hooks
import { useClipboard } from 'design/hooks/use-clipboard';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

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
    const { copied, copy } = useClipboard();
    const t = useCopy();

    const Icon = copied ? Ri.RiCheckLine : Ri.RiFileCopyLine;

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
        <InputGroupButton
          aria-label={t(copied ? 'status_copied' : 'action_copy')}
          onClick={() => {
            void copy(value);
          }}
          type='button'
        >
          <Icon aria-hidden />
        </InputGroupButton>
      </InputGroup>
    );
  }
);

CopyInput.displayName = 'CopyInput';

export { CopyInput };
