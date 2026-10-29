import React from 'react';

import { Form, FormField, Textarea, useForm } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const ERRORS = {
  message: { message: 'Write at least 20 characters.', type: 'minLength' },
};

const Preview: React.FC<Props> = (props) => {
  const form = useForm({
    defaultValues: { message: 'Hello' },
    errors: ERRORS,
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='message'
        render={({ field }) => (
          <Textarea {...field} label='Message' {...props} />
        )}
      />
    </Form>
  );
};

export { Preview };
