import React from 'react';

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/checkbox/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { terms: false } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='terms'
        rules={{ required: 'Accept the terms to continue.' }}
        render={({ field }) => (
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
        )}
      />
      <Button type='submit'>Continue</Button>
    </Form>
  );
};

export { Preview };
