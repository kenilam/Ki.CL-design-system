import React from 'react';

// Components
import { EmailInput, FormField, useFormContext } from 'design/components';

// Constants
import { EMAIL } from 'design/widgets/contact-form/constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Values } from 'design/widgets/contact-form/spec';

const Email: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();
  const t = useCopy();

  return (
    <FormField
      control={control}
      name='email'
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
