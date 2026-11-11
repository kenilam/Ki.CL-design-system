import React from 'react';

// Components
import { Switch } from 'design/components';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';

type Props = { name: string };

const Toggle: React.FunctionComponent<Props> = ({ name }) => {
  const { set, values } = usePreviewContext();

  return (
    <Switch
      checked={Boolean(values[name])}
      onCheckedChange={(checked) => {
        set(name, checked);
      }}
      size='small'
    >
      {name}
    </Switch>
  );
};

export { Toggle };
