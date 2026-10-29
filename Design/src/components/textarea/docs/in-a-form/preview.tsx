import React from 'react';

import { Button, Form, FormField, Textarea, useForm } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { message: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='message'
        rules={{
          maxLength: { message: 'Keep it under 200 characters.', value: 200 },
          required: 'Write a message.',
        }}
        render={({ field }) => (
          <Textarea
            {...field}
            description='Up to 200 characters.'
            label='Message'
            {...props}
          />
        )}
      />
      <Button type='submit'>Send</Button>
    </Form>
  );
};

export { Preview };
