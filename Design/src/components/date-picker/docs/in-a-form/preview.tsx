import React from 'react';

import {
  Button,
  DatePicker,
  Form,
  FormField,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm<{ start?: Date }>();

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='start'
        rules={{ required: 'Pick a start date.' }}
        render={({ field }) => {
          return (
            <DatePicker
              label='Start date'
              onValueChange={field.onChange}
              value={field.value}
              {...props}
            />
          );
        }}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
