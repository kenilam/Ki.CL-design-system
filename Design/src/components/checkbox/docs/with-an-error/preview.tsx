import React from 'react';

import {
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/checkbox/docs/controls';

const ERRORS = {
  terms: { message: 'Accept the terms to continue.', type: 'required' },
};

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { terms: false }, errors: ERRORS });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='terms'
        rules={{ required: 'Accept the terms to continue.' }}
        render={({ field }) => {
          return (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  {...props}
                >
                  I accept the terms
                </Checkbox>
              </FormControl>
              <FormMessage />
            </FormItem>
          );
        }}
      />
    </Form>
  );
};

export { Preview };
