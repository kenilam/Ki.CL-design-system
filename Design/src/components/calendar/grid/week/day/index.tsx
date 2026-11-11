import React from 'react';

// Components
import { Layout } from 'design/components/layout';

// Styles
import './styles.scss';

// Helpers
import { dayLabel } from 'design/components/calendar/helpers';

// Partials
import { useDay } from './use-day';

type Props = { date: Date };

const Day: React.FunctionComponent<Props> = ({ date }) => {
  const day = useDay(date);

  return (
    <td>
      <Layout alignItems='center' display='inline-grid' justifyItems='center'>
        <button
          type='button'
          aria-label={dayLabel(date)}
          aria-current={day.isToday ? 'date' : undefined}
          aria-pressed={day.isPressed}
          disabled={day.isDisabled}
          className={day.className}
          onClick={day.onClick}
        >
          {date.getDate()}
        </button>
      </Layout>
    </td>
  );
};

export { Day };
