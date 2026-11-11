import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Tb from 'react-icons/tb';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as DETAILS } from 'design/components/details/constants';

const CLASS_NAME = `${DETAILS}__marker`;

const Marker: React.FunctionComponent = () => {
  return (
    <Tb.TbChevronDown
      aria-hidden
      className={classNames(CLASS_NAME, 'kicl-print-hidden')}
    />
  );
};

export { Marker };
