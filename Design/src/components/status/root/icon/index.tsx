import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Tb from 'react-icons/tb';

// Spec
import * as Spec from 'design/components/status/spec';

// Context
import { useStatus } from 'design/components/status/context';

const LEVELS: Spec.Icons = {
  error: (
    <Tb.TbAlertCircle
      aria-hidden
      className={classNames('kicl-font-size', 'kicl-color-error')}
    />
  ),
  info: (
    <Tb.TbInfoCircle
      aria-hidden
      className={classNames('kicl-font-size', 'kicl-color-info')}
    />
  ),
  warning: (
    <Tb.TbAlertOctagon
      aria-hidden
      className={classNames('kicl-font-size', 'kicl-color-warning')}
    />
  ),
};

const StatusIcon: React.FunctionComponent = () => {
  const { level } = useStatus();

  return level ? LEVELS[level] : null;
};

export { StatusIcon };
