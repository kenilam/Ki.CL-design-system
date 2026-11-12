import React from 'react';

// Components
import { Button, useFormContext } from 'design/components';

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
    <Button busy={isSubmitting} size='small' type='submit'>
      {t('action_send')}
    </Button>
  );
};

export { Send };
