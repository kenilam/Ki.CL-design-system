import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as DIALOG } from 'design/components/dialog/constants';

// Context
import { useDialog } from 'design/components/dialog/context';

const CLASS_NAME = `${DIALOG}--close`;

const Close: React.FunctionComponent = () => {
  const { closable, closeIcon: CloseIcon, fullScreen, id } = useDialog();
  const t = useCopy();

  if (closable !== true) {
    return null;
  }

  return (
    <Button
      className={classNames(
        'kicl-margin-inline-start-auto',
        fullScreen ? 'kicl-position-fixed' : 'kicl-position-sticky',
        'kicl-z-index-floating',
        CLASS_NAME
      )}
      aria-label={t('action_close_dialog')}
      command='request-close'
      commandfor={id}
      size='small'
      variant='secondary'
    >
      {CloseIcon ? <CloseIcon aria-hidden /> : <Ri.RiCloseLine aria-hidden />}
    </Button>
  );
};

export { Close };
