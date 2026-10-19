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
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>Shown next to your comments.</FormDescription>
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
            <FormLabel>Email</FormLabel>
            <FormControl>
              <EmailInput {...field} placeholder='you@example.com' />
            </FormControl>
            <FormDescription>For the confirmation only.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Create account</Button>
    </Form>
  );
};

export { Preview };
