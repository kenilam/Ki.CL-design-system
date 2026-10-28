import React from 'react';

// Components
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

type Props = Omit<InputProps, 'after' | 'label' | 'readOnly' | 'value'> & {
  /** What the field shows and the button copies. */
  value: string;
};

/**
 * A read-only field with a button that copies its value, for a token, a link
 * or a command. A long value ends in an ellipsis; the copy is always whole.
 */
const CopyInput = React.forwardRef<HTMLInputElement, Props>(
  ({ before, className, disabled, style, value, ...rest }, ref) => {
    const { copied, copy } = useClipboard();
    const t = useCopy();

    const Icon = copied ? Ri.RiCheckLine : Ri.RiFileCopyLine;

    return (
      <InputGroup className={className} disabled={disabled} style={style}>
        {before}
        <InputGroupInput {...rest} readOnly ref={ref} value={value} />
        <InputGroupButton
          aria-label={t(copied ? 'status_copied' : 'action_copy')}
          onClick={() => void copy(value)}
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
