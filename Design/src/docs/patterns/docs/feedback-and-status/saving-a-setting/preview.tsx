import React, { useState } from 'react';
import * as Tb from 'react-icons/tb';

import {
  Card,
  CardDescription,
  CardTitle,
  Layout,
  Spinner,
  Switch,
  Text,
} from 'design/components';

const Preview: React.FC = () => {
  const [state, setState] = useState<'idle' | 'saving' | 'saved'>('idle');

  const save = () => {
    setState('saving');
    setTimeout(() => {
      setState('saved');
    }, 800);
  };

  return (
    <Card
      is='section'
      header={
        <>
          <CardTitle is='h3'>Notifications</CardTitle>
          <CardDescription>Changes save as you make them.</CardDescription>
        </>
      }
      size={5}
    >
      <Layout
        alignItems='center'
        autoFlow='column'
        frames='auto--max-content'
        gap='normal'
      >
        <p>
          <Switch onCheckedChange={save}>Email me my receipts</Switch>
          <Text
            className='kicl-font-size-small'
            is='span'
            level={state === 'saved' ? 'confirm' : undefined}
            role='status'
          >
            {state === 'saving' ? (
              <>
                <Spinner position='inline' /> Saving
              </>
            ) : null}
            {state === 'saved' ? (
              <>
                <Tb.TbCheck aria-hidden /> Saved
              </>
            ) : null}
          </Text>
        </p>
      </Layout>
    </Card>
  );
};

export { Preview };
