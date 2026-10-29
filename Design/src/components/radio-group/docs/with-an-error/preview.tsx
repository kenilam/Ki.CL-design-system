import React from 'react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Radio,
  RadioGroup,
  useForm,
} from 'design/components';

import type { Props } from 'design/components/radio-group/docs/controls';

const ERRORS = { plan: { message: 'Choose a plan.', type: 'required' } };

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { plan: '' }, errors: ERRORS });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name='plan'
        rules={{ required: 'Choose a plan.' }}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <RadioGroup
                legend='Plan'
                onValueChange={field.onChange}
                value={field.value}
                {...props}
              >
                <Radio value='monthly'>Monthly</Radio>
                <Radio value='yearly'>Yearly</Radio>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

export { Preview };
