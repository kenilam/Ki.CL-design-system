import React from 'react';

// Routes
import { useRouteError } from 'design/router';

// Components
import { Card, Details, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Stack: React.FunctionComponent = () => {
  const error = useRouteError();
  const t = useCopy();

  if (!import.meta.env.DEV || !(error instanceof Error)) {
    return null;
  }

  return (
    <Card is='section' variant='secondary'>
      <Details gap='narrow' summary={t('label_stack')}>
        <Text is='pre'>
          <Text is='code'>{error.stack}</Text>
        </Text>
      </Details>
    </Card>
  );
};

export { Stack };
