import React from 'react';

import { List, ListItem } from 'design/components';

import type { Props } from 'design/components/list/docs/controls';

const Preview: React.FC<Props> = (props) => (
  <List autoFlow='column' className='kicl-min-block-size-columns-2' {...props}>
    <ListItem>Components</ListItem>
    <ListItem className='kicl-padding-block-wide'>Styles</ListItem>
    <ListItem>Icons</ListItem>
  </List>
);

export { Preview };
