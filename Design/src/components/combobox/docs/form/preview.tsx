import React from 'react';
import {
  useForm,
  Button,
  Combobox,
  ComboboxAnchor,
  ComboboxContent,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  List,
  ListItem,
} from 'design/components';

import type { Props } from 'design/components/combobox/docs/controls';

import { CITIES } from 'design/components/combobox/docs/constants';

type Values = { city: string };

const Preview: React.FC<Props> = (props) => {
  const form = useForm<Values>({ defaultValues: { city: '' } });
  const city = form.watch('city');
  const matches = CITIES.filter((name) =>
    name.toLowerCase().includes(city.toLowerCase())
  );

  return (
    <Form {...form} onSubmit={form.handleSubmit(() => {})}>
      <FormField
        control={form.control}
        name='city'
        rules={{
          validate: (value) =>
            CITIES.includes(value) || 'Pick a city from the list',
        }}
        render={({ field }) => (
          <FormItem>
            <Combobox {...props}>
              <ComboboxAnchor>
                <FormControl>
                  <Input {...field} label='City' placeholder='Search a city' />
                </FormControl>
              </ComboboxAnchor>
              <ComboboxContent aria-label='Cities'>
                <List gap='narrow'>
                  {matches.map((name) => (
                    <ListItem key={name}>
                      {/* type='button', or a pick would submit the form. */}
                      <Button
                        className='kicl-inline-size-full'
                        onClick={() => field.onChange(name)}
                        type='button'
                        variant='secondary'
                      >
                        {name}
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </ComboboxContent>
            </Combobox>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type='submit'>Save</Button>
    </Form>
  );
};

export { Preview };
