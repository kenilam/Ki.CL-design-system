import React from 'react';

// Components
import { Button, useFormContext } from 'design/components';

// Icons
import * as Tb from 'react-icons/tb';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Values } from 'design/widgets/contact-form/spec';

const Send: React.FunctionComponent = () => {
  const t = useCopy();
  const {
    formState: { isSubmitting },
  } = useFormContext<Values>();

  return (
    <Button
      after={
        isSubmitting ? (
          <Tb.TbReload aria-hidden className='is-revolving' />
        ) : null
      }
      disabled={isSubmitting}
      size='small'
      type='submit'
    >
      {t('action_send')}
    </Button>
  );
};

export { Send };
