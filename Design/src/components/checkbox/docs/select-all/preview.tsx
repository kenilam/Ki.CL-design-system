import React from 'react';

import { Checkbox, CheckboxGroup } from 'design/components';

import type { GroupProps } from 'design/components/checkbox/docs/controls';

const Preview: React.FC<GroupProps> = (props) => {
  return (
    <CheckboxGroup defaultValue={['photos']} selectAll='All files' {...props}>
      <Checkbox value='photos'>Photos</Checkbox>
      <Checkbox value='documents'>Documents</Checkbox>
      <Checkbox value='music'>Music</Checkbox>
    </CheckboxGroup>
  );
};

export { Preview };
