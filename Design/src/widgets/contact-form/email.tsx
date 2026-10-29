import React from 'react';

import { useFormContext } from 'react-hook-form';

// Components
import { EmailInput, FormField } from 'design/components';

// Constants
import { EMAIL } from './constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Values } from './spec';

const Email: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();
  const t = useCopy();

  return (
    <FormField
      control={control}
      name='Email'
      render={({ field }) => {
        return (
          <EmailInput
            {...field}
            label={t('label_email')}
            placeholder={t('placeholder_email')}
          />
        );
      }}
      rules={{
        pattern: { message: t('error_email_invalid'), value: EMAIL },
        required: t('error_email_required'),
      }}
    />
  );
};

export { Email };
