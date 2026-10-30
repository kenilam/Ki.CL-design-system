import React from 'react';

import { Button, Dialog, Image } from 'design/components';

import type { Props } from 'design/components/dialog/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return (
    <>
      <Button command='show-modal' commandfor='dialog-no-title'>
        Open
      </Button>
      <Dialog aria-label='The Ki.CL banner' id='dialog-no-title' {...props}>
        <Image alt='The Ki.CL banner' data='/assets/static/banner.light.webp' />
      </Dialog>
    </>
  );
};

export { Preview };
