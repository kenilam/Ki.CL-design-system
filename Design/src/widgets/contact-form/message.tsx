import React from 'react';

import { useFormContext } from 'react-hook-form';

// Components
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Textarea,
} from '../../components';

// Constants
import { MESSAGE_LENGTH, RETENTION_DAYS } from './constants';

// Copy
import { useCopy } from '../../locales/use-copy';

// Spec
import type { Values } from './spec';

/** The message, with the privacy line as its description. */
const Message: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();
  const t = useCopy();

  return (
    <FormField
      control={control}
      name='Message'
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t('label_message')}</FormLabel>
          <FormControl>
            <Textarea {...field} rows={6} />
          </FormControl>
          <FormDescription>
            {t('privacy', { days: RETENTION_DAYS })}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
      rules={{
        maxLength: {
          message: t('error_message_long', { max: MESSAGE_LENGTH }),
          value: MESSAGE_LENGTH,
        },
        required: t('error_message_required'),
        validate: (value) =>
          Boolean(value.trim()) || t('error_message_required'),
      }}
    />
  );
};

export { Message };
