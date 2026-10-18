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

/** Sticks to the top of the panel; fixed to the window when full screen. */
const Close: React.FunctionComponent = () => {
  const { closable, closeIcon: CloseIcon, fullScreen, id } = useDialog();
  const t = useCopy();

  if (closable !== true) {
    return null;
  }

  return (
    <Button
      unstyled
      className={classNames(
        'kicl-font-size-medium',
        'kicl-margin-inline-start-auto',
        fullScreen ? 'kicl-position-fixed' : 'kicl-position-sticky',
        'kicl-z-index-floating',
        CLASS_NAME
      )}
      aria-label={t('action_close_dialog')}
      command='request-close'
      commandFor={id}
    >
      {CloseIcon ? <CloseIcon /> : <Ri.RiCloseLine />}
    </Button>
  );
};

export { Close };
