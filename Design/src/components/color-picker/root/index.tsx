import React from 'react';

// Components
import { Popover } from 'design/components/popover';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Partials
import { Panel } from './panel';
import { Trigger } from './trigger';
import { Widget } from './widget';

const PRESENTATIONS = {
  popover: (
    <Popover>
      <Trigger />
      <Panel>
        <Widget />
      </Panel>
    </Popover>
  ),
  widget: <Widget />,
};

const Root: React.FunctionComponent = () => {
  const { presentation } = useColorPicker();

  return PRESENTATIONS[presentation];
};

export { Root };
