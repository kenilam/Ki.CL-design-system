import React from 'react';
import { useForm } from 'react-hook-form';

import { Button, EmailInput, Form, FormField, Input } from 'design/components';

type Values = { email: string; name: string };

const Preview: React.FC = () => {
  const form = useForm<Values>({ defaultValues: { name: '', email: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='name'
        rules={{ required: 'Enter your name' }}
        render={({ field }) => (
          <Input
            {...field}
            description='Shown next to your comments.'
            label='Name'
          />
        )}
      />
      <FormField
        control={form.control}
        name='email'
        rules={{ required: 'Enter an email address' }}
        render={({ field }) => (
          <EmailInput
            {...field}
            description='For the confirmation only.'
            label='Email'
            placeholder='you@example.com'
          />
        )}
      />
      <Button type='submit'>Create account</Button>
    </Form>
  );
};

export { Preview };
