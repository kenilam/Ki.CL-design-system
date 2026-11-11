import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout, ListItem, Text } from 'design/components';

// Spec
import type { GAPS } from 'design/components';

type Props = { gap: (typeof GAPS)[number] };

const Gap: React.FunctionComponent<Props> = ({ gap }) => {
  return (
    <ListItem
      alignItems='center'
      autoFlow='row'
      display='flex'
      gap='normal'
      wrap
    >
      <Text className='kicl-inline-size-md' is='code'>{`gap='${gap}'`}</Text>
      <Layout autoFlow='column' gap={gap} justifyContent='start'>
        <div aria-hidden>
          <span
            className={classNames('kicl-background-color-blue', 'kicl-padding')}
          />
          <span
            className={classNames('kicl-background-color-blue', 'kicl-padding')}
          />
        </div>
      </Layout>
    </ListItem>
  );
};

export { Gap };
