import React from 'react';

// Router
import { useLocation } from 'react-router-dom';

// Components
import { Markdown, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Message: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const t = useCopy();

  return (
    <Text>
      <Markdown>{t('message_404', { pathname })}</Markdown>
    </Text>
  );
};

export { Message };
