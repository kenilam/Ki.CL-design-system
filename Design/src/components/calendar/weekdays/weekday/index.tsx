import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Helpers
import { weekdays } from 'design/components/calendar/helpers';

// Styles
import './styles.scss';

type Props = Pick<ReturnType<typeof weekdays>[number], 'long'>;

const Weekday: React.FunctionComponent<Props> = ({ long }) => {
  const weekday = weekdays().find((item) => {
    return item.long === long;
  });

  if (!weekday) {
    return null;
  }

  return (
    <th
      scope='col'
      abbr={long}
      className={classNames(
        `${CALENDAR}__weekday`,
        'kicl-color-grey',
        'kicl-font-size-small',
        'kicl-font-weight',
        'kicl-text-align-center'
      )}
    >
      {weekday.short}
    </th>
  );
};

export { Weekday };
