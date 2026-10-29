import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  EmailInput,
  Form,
  FormField,
  Textarea,
} from 'design/components';

type Values = { email: string; message: string };

const Preview: React.FC = () => {
  const form = useForm<Values>({
    defaultValues: { email: '', message: '' },
    mode: 'onTouched',
  });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='email'
        rules={{ required: 'Enter an email address' }}
        render={({ field }) => {
          return (
            <EmailInput
              {...field}
              label='Your email'
              placeholder='you@example.com'
            />
          );
        }}
      />
      <FormField
        control={form.control}
        name='message'
        rules={{
          maxLength: { message: 'Keep it under 200 characters', value: 200 },
          required: 'Write a message',
        }}
        render={({ field }) => {
          return (
            <Textarea
              {...field}
              description='Up to 200 characters.'
              label='Message'
            />
          );
        }}
      />
      <Button type='submit'>Send</Button>
    </Form>
  );
};

export { Preview };
