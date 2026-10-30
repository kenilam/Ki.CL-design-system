import React from 'react';

import { Button, Dialog, Frame, Heading, Text } from 'design/components';

import type { Props } from 'design/components/frame/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='frame-preview'>
        Open
      </Button>
      <Dialog aria-label='A framed page' fullScreen id='frame-preview'>
        <Frame animate clip {...props}>
          <section className='kicl-padding'>
            <Heading is='h2'>Experiments</Heading>
            <Text>Things I made to learn how something works.</Text>
          </section>
        </Frame>
      </Dialog>
    </>
  );
};

export { Preview };
