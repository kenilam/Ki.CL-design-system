import React from 'react';

import { useFormContext } from 'react-hook-form';

// Components
import {
  EmailInput,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components';

// Constants
import { COPY, EMAIL } from './constants';

// Spec
import type { Values } from './spec';

/** Where the answer and the confirmation go. */
const Email: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();

  return (
    <FormField
      control={control}
      name='Email'
      render={({ field }) => (
        <FormItem>
          <FormLabel>{COPY.email}</FormLabel>
          <FormControl>
            <EmailInput {...field} placeholder='you@example.com' />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
      rules={{
        pattern: { message: COPY.emailInvalid, value: EMAIL },
        required: COPY.emailInvalid,
      }}
    />
  );
};

export { Email };
