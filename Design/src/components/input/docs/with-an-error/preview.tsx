import React from 'react';

import { EmailInput, Form, FormField, useForm } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const ERRORS = {
  email: {
    message: 'Enter a whole email address, like you@example.com.',
    type: 'pattern',
  },
};

const Preview: React.FC<Props> = (props) => {
  const form = useForm({
    defaultValues: { email: 'you@example' },
    errors: ERRORS,
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='email'
        render={({ field }) => (
          <EmailInput {...field} label='Email' {...props} />
        )}
      />
    </Form>
  );
};

export { Preview };
