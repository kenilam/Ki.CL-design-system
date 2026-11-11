import React from 'react';

// Routes
import { useRouteError } from 'design/router';

// Components
import { Dialog } from 'design/components';

// Partials
import { Actions } from './actions';
import { Message } from './message';
import { Stack } from './stack';
import { Title } from './title';
import { useDocumentTitle } from './use-document-title';

const ErrorElement: React.FunctionComponent = () => {
  const error = useRouteError();

  useDocumentTitle();

  if (!error) {
    return null;
  }

  return (
    <Dialog closable={false} footer={<Actions />} header={<Title />} open>
      <Message />
      <Stack />
    </Dialog>
  );
};

export { ErrorElement };
