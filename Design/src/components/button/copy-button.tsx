import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Hooks
import { useClipboard } from 'design/hooks/use-clipboard';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { CopyButtonProps } from './spec';

// Partials
import { Button } from './button';

const CopyButton = React.forwardRef<HTMLButtonElement, CopyButtonProps>(
  (
    {
      copiedLabel,
      icon = <Ri.RiFileCopyLine aria-hidden />,
      label,
      level,
      showLabel,
      value,
      ...rest
    },
    ref
  ) => {
    const t = useCopy();
    const { copied, copy } = useClipboard();

    const name = copied
      ? (copiedLabel ?? t('status_copied'))
      : (label ?? t('action_copy'));
    const mark = copied ? <Ri.RiCheckLine aria-hidden /> : icon;

    const onClick = () => {
      return void copy(typeof value === 'function' ? value() : value);
    };

    return showLabel ? (
      <Button
        {...rest}
        before={mark}
        level={copied ? 'confirm' : level}
        onClick={onClick}
        ref={ref}
      >
        {name}
      </Button>
    ) : (
      <Button
        {...rest}
        aria-label={name}
        level={copied ? 'confirm' : level}
        onClick={onClick}
        ref={ref}
        title={name}
      >
        {mark}
      </Button>
    );
  }
);

CopyButton.displayName = 'CopyButton';

export { CopyButton };
