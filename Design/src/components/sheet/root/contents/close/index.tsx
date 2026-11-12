import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Styles
import './styles.scss';

// Context
import { useSheet } from 'design/components/sheet/context';

const CLASS_NAME = 'kicl--components--sheet__close';

const Close: React.FunctionComponent = () => {
  const { closable, id } = useSheet();
  const t = useCopy();

  if (!closable) {
    return null;
  }

  return (
    <Button
      aria-label={t('action_close_sheet')}
      className={classNames(
        CLASS_NAME,
        'kicl-position-sticky',
        'kicl-z-index-floating'
      )}
      popoverTarget={id}
      popoverTargetAction='hide'
      size='small'
      variant='tertiary'
    >
      <Tb.TbX aria-hidden />
    </Button>
  );
};

export { Close };
