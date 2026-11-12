import React from 'react';

// Components
import { InputGroupButton } from 'design/components/input-group';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/search/constants';

const clear = (event: React.MouseEvent<HTMLButtonElement>) => {
  const element = event.currentTarget
    .closest(`.${CLASS_NAME}`)
    ?.querySelector('input');

  if (!element) {
    return;
  }

  // React only hears a change made through the native setter.
  Object.getOwnPropertyDescriptor(
    HTMLInputElement.prototype,
    'value'
  )?.set?.call(element, '');
  element.dispatchEvent(new Event('input', { bubbles: true }));
  element.focus();
};

const Clear: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <InputGroupButton
      aria-label={t('action_clear')}
      className={`${CLASS_NAME}__clear`}
      onClick={clear}
      type='button'
    >
      <Tb.TbX aria-hidden />
    </InputGroupButton>
  );
};

export { Clear };
