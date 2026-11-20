import React from 'react';

// Components
import { Layout } from 'design/components/layout';

// Partials
import { Channel } from './channel';

// Constants
import { CHANNELS } from 'design/components/color-picker/constants';

const Channels: React.FunctionComponent = () => {
  return (
    <Layout autoFlow='row' gap='none' justifyItems='stretch'>
      <div>
        {(Object.keys(CHANNELS) as (keyof typeof CHANNELS)[]).map((channel) => {
          return <Channel channel={channel} key={channel} />;
        })}
      </div>
    </Layout>
  );
};

export { Channels };
