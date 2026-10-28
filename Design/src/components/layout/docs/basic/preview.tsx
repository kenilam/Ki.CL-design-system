import React from 'react';

import {
  Button,
  Card,
  CardTitle,
  EmailInput,
  Layout,
  PasswordInput,
} from 'design/components';

import type { StackProps } from 'design/components/layout/docs/controls';

const Preview: React.FC<StackProps> = (props) => (
  <Card header={<CardTitle is='h3'>Sign in</CardTitle>} is='form' size={4}>
    <Layout gap='normal' {...props}>
      <fieldset>
        <EmailInput aria-label='Email' placeholder='you@example.com' />
        <PasswordInput aria-label='Password' />
        <Button type='submit'>Sign in</Button>
      </fieldset>
    </Layout>
  </Card>
);

export { Preview };
