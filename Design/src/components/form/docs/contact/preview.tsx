import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  EmailInput,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
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
        render={({ field }) => (
          <FormItem>
            <FormLabel>Your email</FormLabel>
            <FormControl>
              <EmailInput {...field} placeholder='you@example.com' />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='message'
        rules={{
          maxLength: { message: 'Keep it under 200 characters', value: 200 },
          required: 'Write a message',
        }}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Message</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>Up to 200 characters.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Send</Button>
    </Form>
  );
};

export { Preview };
