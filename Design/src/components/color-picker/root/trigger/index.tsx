import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { InputGroup } from 'design/components/input-group';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Partials
import { Button } from './button';
import { Copy } from './copy';

const Trigger: React.FunctionComponent = () => {
  const { className, copyable, disabled } = useColorPicker();

  if (!copyable) {
    return <Button />;
  }

  return (
    <InputGroup
      className={classNames('kicl-inline-size-auto', className)}
      disabled={disabled}
    >
      <Button />
      <Copy />
    </InputGroup>
  );
};

export { Trigger };
