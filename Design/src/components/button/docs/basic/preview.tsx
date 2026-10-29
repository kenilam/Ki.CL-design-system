import React from 'react';

import { Button } from 'design/components';

import type { Props } from 'design/components/button/docs/controls';

const Preview: React.FC<Props> = (props) => {
  return <Button {...props}>Save</Button>;
};

export { Preview };
