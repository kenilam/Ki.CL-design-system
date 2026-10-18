import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components/button';
import { Layout } from 'design/components/layout';
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
    <Layout
      autoFlow='column'
      frames='max-content--auto--max-content'
      alignItems='center'
      gap='narrower'
    >
      <header className={`${CALENDAR}__header`}>
        <Button
          aria-label={t('action_previous_month')}
          onClick={() =>
            setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))
          }
          size='small'
          variant='ghost'
        >
          <Ri.RiArrowLeftSLine aria-hidden />
        </Button>
        <div
          id={titleId}
          aria-live='polite'
          className={classNames(
            `${CALENDAR}__title`,
            'kicl-font-size-small',
            'kicl-font-weight-bold',
            'kicl-text-align-center'
          )}
        >
          {monthLabel(month)}
        </div>
        <Button
          aria-label={t('action_next_month')}
          onClick={() =>
            setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))
          }
          size='small'
          variant='ghost'
        >
          <Ri.RiArrowRightSLine aria-hidden />
        </Button>
      </header>
    </Layout>
  );
};

export { Header };
