import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation } from 'design/components';

// Spec
import type * as Spec from 'design/components/status/spec';

// Context
import { useStatus } from 'design/components/status/context';

// Partials
import { StatusMessage } from './message';
import { StatusTitle } from './title';

const CLASS_NAME = 'kicl--components--status';

const Root: React.FunctionComponent<Spec.Props> = ({
  className,
  in: transitionIn,
  property = 'slide-from-bottom',
  ...rest
}) => {
  const { justifyContent, level } = useStatus();

  return (
    <div
      className={classNames(CLASS_NAME, className)}
      role={level === 'error' ? 'alert' : 'status'}
    >
      <Animation {...rest} property={property} in={transitionIn}>
        <section
          className={classNames({
            [`kicl-color-${level}`]: level,
            [`kicl-text-align-${justifyContent}`]: justifyContent,
          })}
        >
          <StatusTitle />
          <StatusMessage />
        </section>
      </Animation>
    </div>
  );
};

export { Root };
