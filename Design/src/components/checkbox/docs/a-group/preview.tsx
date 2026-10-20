import React from 'react';

import { Checkbox, CheckboxGroup } from 'design/components';

import type { GroupProps } from 'design/components/checkbox/docs/controls';

const Preview: React.FC<GroupProps> = (props) => (
  <CheckboxGroup
    defaultValue={['email']}
    legend='Send updates by'
    name='updates'
    {...props}
  >
    <Checkbox value='email'>Email</Checkbox>
    <Checkbox value='text'>Text message</Checkbox>
    <Checkbox disabled value='post'>
      Post
    </Checkbox>
  </CheckboxGroup>
);

export { Preview };
