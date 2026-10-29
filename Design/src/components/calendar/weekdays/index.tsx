import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Helpers
import { weekdays } from 'design/components/calendar/helpers';

const Weekdays: React.FunctionComponent = () => {
  return (
    <thead>
      <tr>
        {weekdays().map(({ long, short }) => {
          return (
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
          );
        })}
      </tr>
    </thead>
  );
};

export { Weekdays };
