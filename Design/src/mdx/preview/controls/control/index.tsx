import React from 'react';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { isAllowed } from 'design/mdx/preview/spec';
import { Choice } from './choice';
import { Toggle } from './toggle';

type Props = { id: string };

const Control: React.FunctionComponent<Props> = ({ id }) => {
  const { controls, values } = usePreviewContext();
  const control = controls[id];

  if (!isAllowed(control, values)) {
    return null;
  }

  if (control.options === 'boolean') {
    return <Toggle name={id} />;
  }

  return <Choice name={id} />;
};

export { Control };
