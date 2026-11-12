import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Heading } from 'design/components';
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
  heading,
  marker = true,
  onToggle,
  summary,
  ...rest
}) => {
  const toggle = useToggle(onToggle);
  const space = gap ?? (heading ? 'narrow' : undefined);

  return (
    <details
      {...rest}
      className={classNames(
        CLASS_NAME,
        {
          [`${CLASS_NAME}--gap--${space}`]: space,
          [`${CLASS_NAME}--heading`]: heading,
        },
        className
      )}
      onToggle={toggle}
    >
      <Summary>
        {heading ? (
          <Heading dense is={heading} lookLike='h1'>
            {summary}
          </Heading>
        ) : (
          summary
        )}
        {marker ? <Marker /> : null}
      </Summary>
      {children}
    </details>
  );
};

export { Root };
