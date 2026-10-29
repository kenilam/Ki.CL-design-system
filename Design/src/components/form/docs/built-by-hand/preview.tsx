import React from 'react';

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useForm,
} from 'design/components';

const Preview: React.FC = () => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='name'
        rules={{ required: 'Enter your name.' }}
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
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
