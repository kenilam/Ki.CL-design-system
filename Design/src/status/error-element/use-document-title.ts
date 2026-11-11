import { useEffect } from 'react';

// Routes
import { isRouteErrorResponse, useRouteError } from 'design/router';

// Copy
import { useCopy } from 'design/locales/use-copy';

const useDocumentTitle = () => {
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
};

export { useDocumentTitle };
