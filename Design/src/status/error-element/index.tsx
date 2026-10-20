import React, { useEffect } from 'react';

// Routes
import { isRouteErrorResponse, useRouteError } from 'design/router';

// Components
import { Heading, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const ErrorElement: React.FunctionComponent = () => {
  const error = useRouteError();
  const t = useCopy();

  useEffect(() => {
    if (!error) {
      return;
    }

    document.body.dataset.routes = 'errors';

    document.title = t('document_title', {
      title: isRouteErrorResponse(error)
        ? error.status
        : error instanceof Error
          ? error.message.toUpperCase()
          : '',
    });
  }, [error, t]);

  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <Heading is='h1'>
          {t('route_error', { status: error.status, text: error.statusText })}
        </Heading>
        <Text>{String(error.data)}</Text>
      </main>
    );
  }

  if (error instanceof Error) {
    return (
      <main>
        <Heading is='h1'>{error.message}</Heading>
        <Text is='pre'>
          <Text is='code'>{error.stack}</Text>
        </Text>
      </main>
    );
  }

  return null;
};

export { ErrorElement };
