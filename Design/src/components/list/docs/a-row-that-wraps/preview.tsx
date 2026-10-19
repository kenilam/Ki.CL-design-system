import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List
    className='kicl-inline-size-full'
    display='flex'
    gap='narrow'
    wrap
    {...props}
  >
    <ListItem>Animation</ListItem>
    <ListItem>Badge</ListItem>
    <ListItem>Bubble</ListItem>
    <ListItem>Button</ListItem>
    <ListItem>Calendar</ListItem>
    <ListItem>Card</ListItem>
    <ListItem>Checkbox</ListItem>
    <ListItem>Combobox</ListItem>
    <ListItem>Date picker</ListItem>
    <ListItem>Details</ListItem>
    <ListItem>Diagram</ListItem>
    <ListItem>Dialog</ListItem>
    <ListItem>Form</ListItem>
    <ListItem>Heading</ListItem>
    <ListItem>Image</ListItem>
    <ListItem>Input</ListItem>
    <ListItem>Layout</ListItem>
    <ListItem>List</ListItem>
    <ListItem>Markdown</ListItem>
    <ListItem>Menu</ListItem>
    <ListItem>Navigation</ListItem>
    <ListItem>Popover</ListItem>
    <ListItem>Radio group</ListItem>
    <ListItem>Segmented</ListItem>
    <ListItem>Select</ListItem>
    <ListItem>Separator</ListItem>
    <ListItem>Sheet</ListItem>
    <ListItem>Skeleton</ListItem>
    <ListItem>Spinner</ListItem>
    <ListItem>Status</ListItem>
    <ListItem>Switch</ListItem>
    <ListItem>Text</ListItem>
    <ListItem>Textarea</ListItem>
  </List>
);

export { Preview };
