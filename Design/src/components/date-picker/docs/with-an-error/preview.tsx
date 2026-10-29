import React from 'react';

import { DatePicker, Form, FormField, useForm } from 'design/components';

import type { Props } from 'design/components/date-picker/docs/controls';

const ERRORS = { start: { message: 'Pick a start date.', type: 'required' } };

const Preview: React.FC<Props> = (props) => {
  const form = useForm<{ start?: Date }>({ errors: ERRORS });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='start'
        rules={{ required: 'Pick a start date.' }}
        render={({ field }) => (
          <DatePicker
            label='Start date'
            onValueChange={field.onChange}
            value={field.value}
            {...props}
          />
        )}
      />
    </Form>
  );
};

export { Preview };
