import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Card,
  CardTitle,
  EmailInput,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  PasswordInput,
  Text,
} from 'design/components';

type Values = { email: string; password: string };

const Preview: React.FC = () => {
  const [created, setCreated] = useState('');
  const form = useForm<Values>({
    defaultValues: { email: '', password: '' },
    mode: 'onTouched',
  });

  if (created) {
    return (
      <Card header={<CardTitle is='h3'>You're in</CardTitle>} size={5}>
        <Text level='confirm' role='status'>
          We sent a link to {created} to confirm it's yours.
        </Text>
        <Button
          onClick={() => {
            form.reset();
            setCreated('');
          }}
          variant='secondary'
        >
          Start again
        </Button>
      </Card>
    );
  }

  return (
    <Card header={<CardTitle is='h3'>Create an account</CardTitle>} size={5}>
      <Form
        {...form}
        onSubmit={form.handleSubmit(({ email }) => setCreated(email))}
      >
        <FormField
          control={form.control}
          name='email'
          rules={{
            pattern: {
              message: 'Enter an email like name@example.com',
              value: /\S+@\S+\.\S+/,
            },
            required: 'Enter your email address',
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <EmailInput {...field} autoComplete='email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          rules={{
            minLength: { message: 'Use at least 8 characters', value: 8 },
            required: 'Choose a password',
          }}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} autoComplete='new-password' />
              </FormControl>
              <FormDescription>At least 8 characters.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Create account</Button>
      </Form>
    </Card>
  );
};

export { Preview };
