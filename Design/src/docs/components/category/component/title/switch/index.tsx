import React from 'react';

import {
  Heading,
  Layout,
  List,
  Popover,
  PopoverContent,
} from 'design/components';

import { useComponentContext } from 'design/docs/components/category/component/use-component-context';

import { Parts } from './parts';
import { Trigger } from './trigger';

const Switch: React.FunctionComponent = () => {
  const { name } = useComponentContext();

  return (
    <Layout
      alignItems='baseline'
      autoFlow='column'
      gap='narrow'
      justifyContent='start'
    >
      <header>
        <Heading>{name}</Heading>
        <Popover>
          <Trigger />
          <PopoverContent placement='block-end-start'>
            <List gap='narrower'>
              <Parts />
            </List>
          </PopoverContent>
        </Popover>
      </header>
    </Layout>
  );
};

export { Switch };
