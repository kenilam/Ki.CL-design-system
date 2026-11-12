import React, { useState } from 'react';

import { SeekInput } from 'design/components';

import type { Props } from 'design/components/input/docs/controls';

const Preview: React.FC<Pick<Props, 'disabled'>> = (props) => {
  const [elapsed, setElapsed] = useState(83);

  return (
    <SeekInput
      duration={214}
      elapsed={elapsed}
      onSeek={setElapsed}
      {...props}
    />
  );
};

export { Preview };
