import React from 'react';

// Libraries
import classNames from 'classnames';

// Context
import { useCalendar, useMonth } from 'design/components/calendar/context';

// Helpers
import { monthLabel } from 'design/components/calendar/helpers';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

const Title: React.FunctionComponent = () => {
  const { titleId } = useCalendar();
  const { month } = useMonth();

  return (
    <output
      id={titleId}
      className={classNames(`${CALENDAR}__title`, 'kicl-font-weight-bold')}
    >
      {monthLabel(month)}
    </output>
  );
};

export { Title };
