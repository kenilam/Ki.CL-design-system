import React from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
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
            <FormControl>
              <Input {...field} label='Display name' />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='handle'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input
                {...field}
                description='Letters and numbers, no spaces.'
                label='Handle'
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name='bio'
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Textarea
                {...field}
                description='A line or two. Leave it empty to show nothing.'
                label='About you'
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
