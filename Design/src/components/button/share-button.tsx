import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Hooks
import { useClipboard } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { ShareButtonProps } from './spec';

// Partials
import { Button } from './button';

const ShareButton = React.forwardRef<HTMLButtonElement, ShareButtonProps>(
  (
    {
      block,
      copiedLabel,
      icon = <Tb.TbShare aria-hidden />,
      label,
      level,
      showLabel,
      title,
      value,
      ...rest
    },
    ref
  ) => {
    const t = useCopy();
    const { copied, copy } = useClipboard();

    const name = copied
      ? (copiedLabel ?? t('status_copied'))
      : (label ?? t('action_share'));
    const mark = copied ? <Tb.TbCheck aria-hidden /> : icon;

    const onClick = () => {
      const url = typeof value === 'function' ? value() : value;

      if (!('share' in navigator)) {
        return void copy(url);
      }

      navigator
        .share({ title: title ?? document.title, url })
        .catch(() => undefined);
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
        block={block}
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

ShareButton.displayName = 'ShareButton';

export { ShareButton };
