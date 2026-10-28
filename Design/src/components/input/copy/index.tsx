import React from 'react';

// Components
import { FormDescription, FormLabel } from 'design/components/form';
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
import type { InputProps } from 'design/components/input';

type Props = Omit<InputProps, 'after' | 'readOnly' | 'value'> & {
  /** What the field shows and the button copies. */
  value: string;
};

/**
 * A read-only field with a button that copies its value, for a token, a link
 * or a command. A long value ends in an ellipsis; the copy is always whole.
 */
const CopyInput = React.forwardRef<HTMLInputElement, Props>(
  (
    { before, className, description, disabled, label, style, value, ...rest },
    ref
  ) => {
    const control = useFormItemControl({ description, ...rest });
    const { copied, copy } = useClipboard();
    const t = useCopy();

    const Icon = copied ? Ri.RiCheckLine : Ri.RiFileCopyLine;

    return (
      <>
        <FormLabel htmlFor={control.id} required={rest.required}>
          {label}
        </FormLabel>
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
            onClick={() => void copy(value)}
            type='button'
          >
            <Icon aria-hidden />
          </InputGroupButton>
        </InputGroup>
        <FormDescription>{description}</FormDescription>
      </>
    );
  }
);

CopyInput.displayName = 'CopyInput';

export { CopyInput };
