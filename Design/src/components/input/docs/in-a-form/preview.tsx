import React from 'react';

import { Button, Form, FormField, Input, useForm } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { name: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='name'
        rules={{ required: 'Enter your name.' }}
        render={({ field }) => (
          <Input
            {...field}
            description='Shown next to your comments.'
            label='Name'
            {...props}
          />
        )}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
