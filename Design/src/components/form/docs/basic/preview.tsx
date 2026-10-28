import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  EmailInput,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
} from 'design/components';

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
          <FormItem>
            <FormControl>
              <Input
                {...field}
                description='Shown next to your comments.'
                label='Name'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='email'
        rules={{ required: 'Enter an email address' }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <EmailInput
                {...field}
                description='For the confirmation only.'
                label='Email'
                placeholder='you@example.com'
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Create account</Button>
    </Form>
  );
};

export { Preview };
