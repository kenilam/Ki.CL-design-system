import React from 'react';

// Routes
import { isRouteErrorResponse, useRouteError } from 'design/router';

// Components
import { Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Message: React.FunctionComponent = () => {
  const error = useRouteError();
  const t = useCopy();

  let message = String(error);

  if (isRouteErrorResponse(error)) {
    message = t('route_error', {
      status: error.status,
      text: error.statusText,
    });
  }

  if (error instanceof Error) {
    message = error.message;
  }

  return <Text>{message}</Text>;
};

export { Message };
