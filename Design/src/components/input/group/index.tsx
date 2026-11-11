import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { InputGroup } from 'design/components/input-group';

// Spec
import type { Props as InputProps } from 'design/components/input/spec';

type Props = React.PropsWithChildren<
  Pick<InputProps, 'after' | 'before' | 'className' | 'style'>
>;

const Group: React.FunctionComponent<Props> = ({
  after,
  before,
  children,
  className,
  style,
}) => {
  return (
    <InputGroup
      className={classNames(
        {
          'kicl-padding-inline-end-narrow': after,
          'kicl-padding-inline-start-narrow': before,
        },
        className
      )}
      is='label'
      style={style}
    >
      {before}
      {children}
      {after}
    </InputGroup>
  );
};

export { Group };
