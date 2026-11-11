import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { CLASS_NAME as CALENDAR } from 'design/components/calendar/constants';

// Partials
import { Next } from './next';
import { Previous } from './previous';
import { Title } from './title';

const Header: React.FunctionComponent = () => {
  return (
    <caption
      className={classNames(`${CALENDAR}__header`, 'kicl-font-size-small')}
    >
      <Previous />
      <Title />
      <Next />
    </caption>
  );
};

export { Header };
