import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from '../..';

// Icons
import * as Ri from 'react-icons/ri';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as DIALOG } from '../constants';

// Context
import { useDialog } from '../context';

const CLASS_NAME = `${DIALOG}--close`;

const COPY = {
  label: 'Close this dialog',
};

/** Sticks to the top of the panel; fixed to the window when full screen. */
const Close: React.FunctionComponent = () => {
  const { closable, closeIcon: CloseIcon, fullScreen, id } = useDialog();

  if (closable !== true) {
    return null;
  }

  return (
    <Button
      unstyled
      className={classNames(
        'kicl-font-size-medium',
        fullScreen ? 'kicl-position-fixed' : 'kicl-position-sticky',
        'kicl-z-index-floating',
        CLASS_NAME
      )}
      aria-label={COPY.label}
      command='request-close'
      commandFor={id}
    >
      {CloseIcon ? <CloseIcon /> : <Ri.RiCloseLine />}
    </Button>
  );
};

export { Close };
