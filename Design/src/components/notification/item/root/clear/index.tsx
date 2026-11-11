import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { useNotification } from 'design/components/notification/item/context';

// Constants
import { CLASS_NAME } from 'design/components/notification/item/constants';

const Clear: React.FunctionComponent = () => {
  const t = useCopy();
  const { hide, onClear } = useNotification();

  if (!onClear) {
    return null;
  }

  return (
    <Button
      aria-label={t('action_clear_notification')}
      className={classNames(
        `${CLASS_NAME}__clear`,
        'kicl-position-relative',
        'kicl-z-index-raised'
      )}
      onClick={(event) => {
        event.stopPropagation();
        hide();
      }}
      type='button'
      unstyled
    >
      <Tb.TbX aria-hidden />
    </Button>
  );
};

export { Clear };
