import React, { useEffect } from 'react';

// Routes
import { isRouteErrorResponse, useRouteError } from 'design/router';

// Components
import {
  Button,
  Dialog,
  Heading,
  HyperLink,
  Menu,
  Text,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const reload = () => {
  window.location.reload();
};

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

  if (!error) {
    return null;
  }

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

  return (
    <Dialog
      closable={false}
      footer={
        <Menu aria-label={t('title_error')} justifyContent='end'>
          <HyperLink
            lookLikeButton
            reloadDocument
            size='small'
            to='/'
            variant='secondary'
          >
            {t('action_home')}
          </HyperLink>
          <Button onClick={reload} size='small'>
            {t('action_reload')}
          </Button>
        </Menu>
      }
      header={
        <Heading dense is='h2' lookLike='h4'>
          {t('title_error')}
        </Heading>
      }
      open
    >
      <Text>{message}</Text>
      {import.meta.env.DEV && error instanceof Error ? (
        <Text is='pre'>
          <Text is='code'>{error.stack}</Text>
        </Text>
      ) : null}
    </Dialog>
  );
};

export { ErrorElement };
