import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { Button } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const reload = () => {
  window.location.reload();
};

const Reload: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <Button before={<Tb.TbReload aria-hidden />} onClick={reload} size='small'>
      {t('action_reload')}
    </Button>
  );
};

export { Reload };
