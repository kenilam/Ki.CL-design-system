import React, { useEffect } from 'react';

// Libraries
import { useRouteError } from 'react-router-dom';

// Components
import { Heading, Text } from '../../components';

// Copy
import { useCopy } from '../../locales/use-copy';

// Spec
import * as Spec from './spec';

const ErrorElement: React.FunctionComponent = () => {
  const errors = useRouteError() as Spec.RouterError | Error;
  const t = useCopy();

  useEffect(() => {
    if (!errors) {
      return;
    }

    const root = document.querySelector('body');

    if (!root) {
      return;
    }

    root.dataset.routes = 'errors';

    if (errors instanceof Error) {
      document.title = t('document_title', {
        title: errors?.message.toUpperCase(),
      });
      return;
    }

    document.title = t('document_title', { title: errors?.status });
  });

  if (!errors) {
    return null;
  }

  if (errors instanceof Error) {
    return (
      <main>
        <Heading is='h1'>{`${errors?.message}`}</Heading>
        <Text is='pre'>
          <Text is='code'>{`${errors?.stack}`}</Text>
        </Text>
      </main>
    );
  }

  return (
    <main>
      <Heading is='h1'>
        {t('route_error', { status: errors?.status, text: errors?.statusText })}
      </Heading>
      <Text>{`${errors?.error}`}</Text>
    </main>
  );
};

export { ErrorElement };
