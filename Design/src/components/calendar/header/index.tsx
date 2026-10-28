import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';
import * as Ri from 'react-icons/ri';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Context
import { useCalendar } from 'design/components/calendar/context';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Helpers
import { monthLabel } from 'design/components/calendar/helpers';

const Header: React.FunctionComponent = () => {
  const { month, setMonth, titleId } = useCalendar();
  const t = useCopy();

  return (
    <caption
      className={classNames(`${CALENDAR}__header`, 'kicl-font-size-small')}
    >
      <Button
        aria-label={t('action_previous_month')}
        onClick={() =>
          setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
        }
        size='small'
        variant='secondary'
      >
        <Ri.RiArrowLeftSLine aria-hidden />
      </Button>
      <output
        id={titleId}
        className={classNames(`${CALENDAR}__title`, 'kicl-font-weight-bold')}
      >
        {monthLabel(month)}
      </output>
      <Button
        aria-label={t('action_next_month')}
        onClick={() =>
          setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
        }
        size='small'
        variant='secondary'
      >
        <Ri.RiArrowRightSLine aria-hidden />
      </Button>
    </caption>
  );
};

export { Header };
