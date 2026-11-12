import React from 'react';

// Components
import { Button } from 'design/components/button';

// Context
import { useMonth } from 'design/components/calendar/context';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

const Next: React.FunctionComponent = () => {
  const { month, setMonth } = useMonth();
  const t = useCopy();

  return (
    <Button
      aria-label={t('action_next_month')}
      className={`${CALENDAR}__next`}
      onClick={() => {
        setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1));
      }}
      size='small'
      variant='secondary'
    >
      <Tb.TbChevronRight aria-hidden className='kicl-rtl-mirror' />
    </Button>
  );
};

export { Next };
