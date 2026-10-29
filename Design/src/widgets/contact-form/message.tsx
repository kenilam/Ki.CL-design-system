import React from 'react';

import { useFormContext } from 'react-hook-form';

// Components
import { FormField, Textarea } from 'design/components';

// Constants
import { MESSAGE_LENGTH, RETENTION_DAYS } from './constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Values } from './spec';

const Message: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();
  const t = useCopy();

  return (
    <FormField
      control={control}
      name='Message'
      render={({ field }) => {
        return (
          <Textarea
            {...field}
            description={t('privacy', { days: RETENTION_DAYS })}
            label={t('label_message')}
            rows={6}
          />
        );
      }}
      rules={{
        maxLength: {
          message: t('error_message_long', { max: MESSAGE_LENGTH }),
          value: MESSAGE_LENGTH,
        },
        required: t('error_message_required'),
        validate: (value) => {
          return Boolean(value.trim()) || t('error_message_required');
        },
      }}
    />
  );
};

export { Message };
