import React from 'react';

// Components
import { Switch } from 'design/components';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';

type Props = { name: string };

const Toggle: React.FunctionComponent<Props> = ({ name }) => {
  const { controls, set, values } = usePreviewContext();
  const fallback = controls[name].default;

  return (
    <Switch
      checked={Boolean(values[name] ?? fallback)}
      onCheckedChange={(checked) => {
        set(name, checked === fallback ? undefined : checked);
      }}
      size='small'
    >
      {name}
    </Switch>
  );
};

export { Toggle };
