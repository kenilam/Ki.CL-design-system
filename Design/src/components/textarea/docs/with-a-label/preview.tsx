import React from 'react';

import { FormItem, Textarea } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <FormItem>
    <Textarea
      description='Up to 200 characters.'
      label='Message'
      placeholder='Write a message'
      {...props}
    />
  </FormItem>
);

export { Preview };
