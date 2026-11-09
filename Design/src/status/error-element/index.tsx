import React, { useEffect } from 'react';

// Icons
import * as Bs from 'react-icons/bs';

// Routes
import { isRouteErrorResponse, useRouteError } from 'design/router';

// Components
import {
  Button,
  Card,
  Details,
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
          <Button
            before={<Bs.BsArrowClockwise aria-hidden />}
            onClick={reload}
            size='small'
          >
            {t('action_reload')}
          </Button>
          <HyperLink
            before={<Bs.BsHouse aria-hidden />}
            lookLikeButton
            reloadDocument
            size='small'
            to='/'
            variant='secondary'
          >
            {t('action_home')}
          </HyperLink>
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
        <Card is='section' variant='secondary'>
          <Details gap='narrow' summary={t('label_stack')}>
            <Text is='pre'>
              <Text is='code'>{error.stack}</Text>
            </Text>
          </Details>
        </Card>
      ) : null}
    </Dialog>
  );
};

export { ErrorElement };
