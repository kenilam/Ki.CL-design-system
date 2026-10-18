import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Ri from 'react-icons/ri';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as DETAILS } from 'design/components/details/constants';

const CLASS_NAME = `${DETAILS}__marker`;

/** A chevron: down while closed, turned up once the `<details>` is open. */
const Marker: React.FunctionComponent = () => (
  <Ri.RiArrowDownSLine
    aria-hidden
    className={classNames(CLASS_NAME, 'kicl-print-hidden')}
  />
);

export { Marker };
