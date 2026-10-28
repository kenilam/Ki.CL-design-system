import React from 'react';
import { useForm, useWatch } from 'react-hook-form';

import {
  Card,
  CardTitle,
  CopyButton,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Input,
  Layout,
  Switch,
} from 'design/components';

type Values = { id: string; pro: boolean; team: string };

const Preview: React.FC = () => {
  const form = useForm<Values>({
    defaultValues: { id: 'KI-20481', pro: false, team: 'Design' },
  });
  const pro = useWatch({ control: form.control, name: 'pro' });

  return (
    <Card is='section' header={<CardTitle is='h3'>Account</CardTitle>} size={5}>
      <Form {...form} onSubmit={form.handleSubmit(() => {})}>
        <FormField
          control={form.control}
          name='id'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account ID</FormLabel>
              <Layout
                alignItems='center'
                autoFlow='column'
                frames='auto--max-content'
                gap='narrow'
              >
                <div>
                  <FormControl>
                    <Input {...field} readOnly />
                  </FormControl>
                  <CopyButton
                    showLabel
                    size='small'
                    value={field.value}
                    variant='secondary'
                  />
                </div>
              </Layout>
              <FormDescription>Quote it when you contact us.</FormDescription>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='pro'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange}>
                  Pro plan
                </Switch>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='team'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team name</FormLabel>
              <FormControl>
                <Input {...field} disabled={!pro} />
              </FormControl>
              <FormDescription>
                {pro
                  ? 'Everyone on your team sees this name.'
                  : 'Teams are part of the Pro plan. Turn it on to rename yours.'}
              </FormDescription>
            </FormItem>
          )}
        />
      </Form>
    </Card>
  );
};

export { Preview };
