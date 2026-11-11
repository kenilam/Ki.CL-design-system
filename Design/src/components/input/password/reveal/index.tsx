import React from 'react';

// Components
import { InputGroupButton } from 'design/components/input-group';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { usePassword } from 'design/components/input/password/context';

const Reveal: React.FunctionComponent = () => {
  const t = useCopy();
  const { shown, toggle } = usePassword();
  const Icon = shown ? Tb.TbEyeOff : Tb.TbEye;

  return (
    <InputGroupButton
      aria-label={t(shown ? 'action_hide_password' : 'action_show_password')}
      aria-pressed={shown}
      onClick={toggle}
      type='button'
    >
      <Icon aria-hidden />
    </InputGroupButton>
  );
};

export { Reveal };
