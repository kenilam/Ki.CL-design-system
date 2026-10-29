import React from 'react';

import {
  Form,
  FormField,
  Select,
  SelectItem,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/select/docs/controls';

const ERRORS = {
  country: { message: 'Choose a country.', type: 'required' },
};

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { country: '' }, errors: ERRORS });

  return (
    <Form {...form}>
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
    </Form>
  );
};

export { Preview };
