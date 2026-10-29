import React from 'react';

import {
  Button,
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

const Preview: React.FC<Props> = (props) => {
  const form = useForm({ defaultValues: { plan: '' } });

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
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
      <Button type='submit'>Continue</Button>
    </Form>
  );
};

export { Preview };
