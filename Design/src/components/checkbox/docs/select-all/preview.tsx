import React from 'react';

import { Checkbox, CheckboxGroup } from 'design/components';

const Preview: React.FC = () => (
  <CheckboxGroup defaultValue={['photos']} selectAll='All files'>
    <Checkbox value='photos'>Photos</Checkbox>
    <Checkbox value='documents'>Documents</Checkbox>
    <Checkbox value='music'>Music</Checkbox>
  </CheckboxGroup>
);

export { Preview };
