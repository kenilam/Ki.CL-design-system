import React, { useEffect, useState } from 'react';

// Components
import { InputGroupButton } from '../../input-group';
import { Input } from '..';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { InputProps } from '..';

type Props = Omit<InputProps, 'readOnly' | 'value'> & {
  /** What the field shows and the button copies. */
  value: string;
};

/** How long the button says it copied. */
const COPIED_MS = 2000;

/**
 * A read-only field with a button that copies its value, for a token, a link
 * or a command. A long value ends in an ellipsis; the copy is always whole.
 */
const CopyInput = React.forwardRef<HTMLInputElement, Props>(
  ({ value, ...rest }, ref) => {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
      if (!copied) {
        return;
      }

      const timer = setTimeout(() => setCopied(false), COPIED_MS);

      return () => clearTimeout(timer);
    }, [copied]);

    const Icon = copied ? Ri.RiCheckLine : Ri.RiFileCopyLine;

    return (
      <Input
        {...rest}
        after={
          <InputGroupButton
            aria-label={copied ? 'Copied' : 'Copy'}
            onClick={() =>
              navigator.clipboard.writeText(value).then(() => setCopied(true))
            }
            size='icon-xs'
            type='button'
          >
            <Icon aria-hidden />
          </InputGroupButton>
        }
        readOnly
        ref={ref}
        value={value}
      />
    );
  }
);

CopyInput.displayName = 'CopyInput';

export { CopyInput };
