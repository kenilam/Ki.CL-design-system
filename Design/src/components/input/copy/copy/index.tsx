import React from 'react';

// Components
import { InputGroupButton } from 'design/components/input-group';

// Hooks
import { useClipboard } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

type Props = { value: string };

const Copy: React.FunctionComponent<Props> = ({ value }) => {
  const { copied, copy } = useClipboard();
  const t = useCopy();
  const Icon = copied ? Tb.TbCheck : Tb.TbFiles;

  return (
    <InputGroupButton
      aria-label={t(copied ? 'status_copied' : 'action_copy')}
      onClick={() => {
        void copy(value);
      }}
      type='button'
    >
      <Icon aria-hidden />
    </InputGroupButton>
  );
};

export { Copy };
