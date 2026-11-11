import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Text, useFormContext } from 'design/components';

// Spec
import type { Values } from 'design/widgets/contact-form/spec';

const SendError: React.FunctionComponent = () => {
  const {
    formState: { errors },
  } = useFormContext<Values>();

  if (!errors.root?.message) {
    return null;
  }

  return (
    <Text
      className={classNames('kicl-font-size-small', 'kicl-color-error')}
      is='p'
      role='alert'
    >
      {errors.root.message}
    </Text>
  );
};

export { SendError };
