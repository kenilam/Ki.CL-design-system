import React, { useState } from 'react';

import { Checkbox } from 'design/components';

import type { Props } from 'design/components/checkbox/docs/controls';

const Preview: React.FC<Props> = (props) => {
  const [checked, setChecked] = useState<boolean | 'indeterminate'>(
    'indeterminate'
  );

  return (
    <Checkbox checked={checked} onCheckedChange={setChecked} {...props}>
      Some of the files
    </Checkbox>
  );
};

export { Preview };
