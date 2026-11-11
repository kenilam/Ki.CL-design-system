import React from 'react';

// Components
import { Text } from 'design/components';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';

const Description: React.FunctionComponent = () => {
  const { preset } = usePreviewContext();

  if (!preset.props.description) {
    return null;
  }

  return <Text variant='secondary'>{preset.props.description}</Text>;
};

export { Description };
