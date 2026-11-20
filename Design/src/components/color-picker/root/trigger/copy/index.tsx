import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { InputGroupButton } from 'design/components/input-group';

// Hooks
import { useClipboard } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

const Copy: React.FunctionComponent = () => {
  const { color } = useColorPicker();
  const { copied, copy } = useClipboard();
  const t = useCopy();
  const Icon = copied ? Tb.TbCheck : Tb.TbFiles;

  return (
    <InputGroupButton
      aria-label={t(copied ? 'status_copied' : 'action_copy')}
      onClick={() => {
        void copy(color.hex.toUpperCase());
      }}
      type='button'
    >
      <Icon aria-hidden className={copied ? 'kicl-color-confirm' : undefined} />
    </InputGroupButton>
  );
};

export { Copy };
