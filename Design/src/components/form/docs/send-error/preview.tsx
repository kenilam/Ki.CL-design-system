import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  EmailInput,
  Form,
  FormField,
  FormMessage,
} from 'design/components';

type Values = { email: string };

const Preview: React.FC = () => {
  const form = useForm<Values>({ defaultValues: { email: '' } });

  return (
    <Form
      {...form}
      onSubmit={form.handleSubmit(() => {
        form.setError('root', {
          message: 'The message didn’t send. Try again in a minute.',
        });
      })}
    >
      <FormField
        control={form.control}
        name='email'
        rules={{ required: 'Enter an email address' }}
        render={({ field }) => {
          return <EmailInput {...field} label='Your email' />;
        }}
      />
      <FormMessage name='root' />
      <Button type='submit'>Send</Button>
    </Form>
  );
};

export { Preview };
