import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Textarea,
} from 'design/components';

type Values = { bio: string; handle: string; name: string };

const Preview: React.FC = () => {
  const form = useForm<Values>({
    defaultValues: { name: 'John Smith', handle: 'johnsmith', bio: '' },
  });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='name'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Display name</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='handle'
        render={({ field }) => (
          <FormItem>
            <FormLabel>Handle</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormDescription>Letters and numbers, no spaces.</FormDescription>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='bio'
        render={({ field }) => (
          <FormItem>
            <FormLabel>About you</FormLabel>
            <FormControl>
              <Textarea {...field} />
            </FormControl>
            <FormDescription>
              A line or two. Leave it empty to show nothing.
            </FormDescription>
          </FormItem>
        )}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
