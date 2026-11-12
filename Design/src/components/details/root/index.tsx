import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Marker } from 'design/components/details/marker';

// Spec
import type { Props } from 'design/components/details/spec';

// Constants
import { CLASS_NAME } from 'design/components/details/constants';

// Partials
import { Summary } from './summary';
import { useToggle } from './use-toggle';

const Root: React.FunctionComponent<
  Props & Pick<React.ComponentProps<'details'>, 'ref'>
> = ({
  children,
  className,
  gap,
  marker = true,
  onToggle,
  summary,
  ...rest
}) => {
  const toggle = useToggle(onToggle);

  return (
    <details
      {...rest}
      className={classNames(
        CLASS_NAME,
        { [`${CLASS_NAME}--gap--${gap}`]: gap },
        className
      )}
      onToggle={toggle}
    >
      <Summary>
        {summary}
        {marker ? <Marker /> : null}
      </Summary>
      {children}
    </details>
  );
};

export { Root };
