import React from 'react';

import { Badge, List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <List
      className='kicl-inline-size-full'
      display='flex'
      gap='narrow'
      wrap
      {...props}
    >
      <ListItem>
        <Badge variant='secondary'>Animation</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Badge</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Bubble</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Button</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Calendar</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Card</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Checkbox</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Combobox</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Date picker</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Details</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Diagram</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Dialog</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Form</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Heading</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Image</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Input</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Layout</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>List</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Markdown</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Menu</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Navigation</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Popover</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Radio group</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Segmented</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Select</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Separator</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Sheet</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Skeleton</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Spinner</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Status</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Switch</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Text</Badge>
      </ListItem>
      <ListItem>
        <Badge variant='secondary'>Textarea</Badge>
      </ListItem>
    </List>
  );
};

export { Preview };
