import React from 'react';

import { useFormContext } from 'react-hook-form';

// Components
import {
  EmailInput,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from 'design/components';

// Constants
import { EMAIL } from './constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Values } from './spec';

/** Where the answer and the confirmation go. */
const Email: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();
  const t = useCopy();

  return (
    <FormField
      control={control}
      name='Email'
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <EmailInput
              {...field}
              label={t('label_email')}
              placeholder={t('placeholder_email')}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      rules={{
        pattern: { message: t('error_email_invalid'), value: EMAIL },
        required: t('error_email_required'),
      }}
    />
  );
};

export { Email };
