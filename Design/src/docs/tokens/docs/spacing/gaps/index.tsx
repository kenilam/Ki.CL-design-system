import React from 'react';

// Components
import { Layout, List, ListItem, Text } from 'design/components';

// Spec
import { GAPS } from 'design/components/spec';

const Gaps: React.FunctionComponent = () => (
  <List gap='normal'>
    {GAPS.map((gap) => (
      <ListItem
        alignItems='center'
        autoFlow='row'
        display='flex'
        gap='normal'
        wrap
        key={gap}
      >
        <Text className='kicl-inline-size-md' is='code'>{`gap='${gap}'`}</Text>
        <Layout autoFlow='column' gap={gap} justifyContent='start'>
          <div aria-hidden>
            <span className='kicl-background-color-blue kicl-padding' />
            <span className='kicl-background-color-blue kicl-padding' />
          </div>
        </Layout>
      </ListItem>
    ))}
  </List>
);

export { Gaps };
