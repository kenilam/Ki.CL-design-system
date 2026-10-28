import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

import {
  Button,
  Card,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  Form,
  FormField,
  FormItem,
  Radio,
  RadioGroup,
  Text,
} from 'design/components';

const DELIVERY: Record<string, number> = { express: 6, standard: 0 };
const EXTRAS: Record<string, number> = { card: 1, wrap: 3 };

type Values = { delivery: string; extras: string[] };

const Preview: React.FC = () => {
  const form = useForm<Values>({
    defaultValues: { delivery: 'standard', extras: [] },
  });
  const [delivery, extras] = useWatch({
    control: form.control,
    name: ['delivery', 'extras'],
  });
  const saved = form.formState.isSubmitSuccessful && !form.formState.isDirty;

  const total =
    20 +
    DELIVERY[delivery] +
    extras.reduce((sum, extra) => sum + EXTRAS[extra], 0);

  return (
    <Card
      is='section'
      header={<CardTitle is='h3'>Your order</CardTitle>}
      size={5}
    >
      <Form
        {...form}
        onSubmit={form.handleSubmit((values) => form.reset(values))}
      >
        <FormField
          control={form.control}
          name='delivery'
          render={({ field }) => (
            <FormItem>
              <RadioGroup
                legend='Delivery'
                name={field.name}
                onValueChange={field.onChange}
                value={field.value}
              >
                <Radio value='standard'>Standard, 3 to 5 days, free</Radio>
                <Radio value='express'>Express, next day, $6</Radio>
              </RadioGroup>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='extras'
          render={({ field }) => (
            <FormItem>
              <CheckboxGroup
                legend='Extras'
                name={field.name}
                onValueChange={field.onChange}
                value={field.value}
              >
                <Checkbox value='wrap'>Gift wrap, $3</Checkbox>
                <Checkbox value='card'>A card with a note, $1</Checkbox>
              </CheckboxGroup>
            </FormItem>
          )}
        />
        <Text className='kicl-font-weight-bold' role='status'>
          Total ${total.toFixed(2)}
        </Text>
        <Button type='submit'>{saved ? 'Saved' : 'Save choices'}</Button>
      </Form>
    </Card>
  );
};

export { Preview };
