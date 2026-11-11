import React from 'react';

// Spec
import type { ColumnSpan, HeadingIs } from 'design/components';

// Partials
import { Provider } from './context';
import { Root } from './root';

type Props = {
  fill?: ColumnSpan;
  names: string[];
  preview?: React.FunctionComponent<{ name: string }>;
  property?: string;
  scope?: HeadingIs;
};

const Variables: React.FunctionComponent<Props> = ({
  fill = 6,
  scope = 'span' as const,
  ...props
}) => {
  return (
    <Provider {...props} fill={fill} scope={scope}>
      <Root />
    </Provider>
  );
};

export { Variables };
