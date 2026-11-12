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

const Previous: React.FunctionComponent = () => {
  const { month, setMonth } = useMonth();
  const t = useCopy();

  return (
    <Button
      aria-label={t('action_previous_month')}
      className={`${CALENDAR}__previous`}
      onClick={() => {
        setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1));
      }}
      size='small'
      variant='secondary'
    >
      <Tb.TbChevronLeft aria-hidden className='kicl-rtl-mirror' />
    </Button>
  );
};

export { Previous };
