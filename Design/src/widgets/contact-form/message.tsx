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
import { COPY, MESSAGE_LENGTH } from './constants';

// Spec
import type { Values } from './spec';

/** The message, with the privacy line as its description. */
const Message: React.FunctionComponent = () => {
  const { control } = useFormContext<Values>();

  return (
    <FormField
      control={control}
      name='Message'
      render={({ field }) => (
        <FormItem>
          <FormLabel>{COPY.message}</FormLabel>
          <FormControl>
            <Textarea {...field} rows={6} />
          </FormControl>
          <FormDescription>{COPY.privacy}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
      rules={{
        maxLength: { message: COPY.messageLong, value: MESSAGE_LENGTH },
        required: COPY.messageRequired,
        validate: (value) => Boolean(value.trim()) || COPY.messageRequired,
      }}
    />
  );
};

export { Message };
