import React, { useId, useState } from 'react';

import { Layout, Text, Textarea } from 'design/components';

import type { Props } from 'design/components/textarea/docs/controls';

const LIMIT = 160;

const Preview: React.FC<Props> = (props) => {
  const countId = useId();
  const [bio, setBio] = useState('');

  return (
    <Layout gap='narrowest' justifyItems='end'>
      <p>
        <Textarea
          aria-describedby={countId}
          aria-label='Bio'
          maxLength={LIMIT}
          onChange={(event) => setBio(event.target.value)}
          placeholder={`Up to ${LIMIT} characters`}
          value={bio}
          {...props}
        />
        <Text
          className='kicl-font-size-small'
          id={countId}
          is='span'
          variant='secondary'
        >
          {bio.length} / {LIMIT}
        </Text>
      </p>
    </Layout>
  );
};

export { Preview };
