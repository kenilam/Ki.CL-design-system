import React from 'react';

import { Checkbox, CheckboxGroup } from 'design/components';

const Preview: React.FC = () => (
  <CheckboxGroup
    defaultValue={['email']}
    legend='Send updates by'
    name='updates'
  >
    <Checkbox value='email'>Email</Checkbox>
    <Checkbox value='text'>Text message</Checkbox>
    <Checkbox disabled value='post'>
      Post
    </Checkbox>
  </CheckboxGroup>
);

export { Preview };
