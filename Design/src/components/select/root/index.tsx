import React, { Suspense } from 'react';

// Components
import { Spinner } from 'design/components';

// Context
import { Provider } from 'design/components/select/context';

import type { SelectProps } from 'design/components/select/spec';

type Props = Omit<SelectProps, 'description' | 'label' | 'layout'> & {
  ref?: React.Ref<HTMLSelectElement>;
};

const VERSIONS = {
  true: React.lazy(async () => {
    const { BaseSelect } = await import('./appearance/base-select');

    return { default: BaseSelect };
  }),
  false: React.lazy(async () => {
    const { Auto } = await import('./appearance/auto');

    return { default: Auto };
  }),
};

const Root: React.FunctionComponent<Props> = (props) => {
  const Version = VERSIONS[String(CSS.supports('appearance', 'base-select'))];

  return (
    <Provider>
      <Suspense fallback={<Spinner position='inline' />}>
        <Version {...props} />
      </Suspense>
    </Provider>
  );
};

export { Root, type Props };
