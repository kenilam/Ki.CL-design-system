import React from 'react';

import {
  Button,
  Form,
  FormField,
  Segmented,
  SegmentedItem,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/segmented/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { period: 'monthly' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='period'
        render={({ field }) => {
          return (
            <Segmented
              name={field.name}
              onValueChange={field.onChange}
              value={field.value}
              {...props}
            >
              <legend>Billing</legend>
              <SegmentedItem value='monthly'>Monthly</SegmentedItem>
              <SegmentedItem value='yearly'>Yearly</SegmentedItem>
            </Segmented>
          );
        }}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
