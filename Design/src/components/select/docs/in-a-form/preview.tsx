import React from 'react';

import {
  Button,
  Form,
  FormField,
  Select,
  SelectItem,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { country: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='country'
        rules={{ required: 'Choose a country.' }}
        render={({ field }) => (
          <Select
            {...field}
            label='Country'
            placeholder='Choose one'
            {...props}
          >
            <SelectItem value='ca'>Canada</SelectItem>
            <SelectItem value='gb'>United Kingdom</SelectItem>
            <SelectItem value='us'>United States</SelectItem>
          </Select>
        )}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
