import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Helpers
import { weekdays } from 'design/components/calendar/helpers';

/** Column headers; `abbr` gives each column its full day name. */
const Weekdays: React.FunctionComponent = () => (
  <thead>
    <tr>
      {weekdays().map(({ long, short }) => (
        <th
          key={long}
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
          {short}
        </th>
      ))}
    </tr>
  </thead>
);

export { Weekdays };
