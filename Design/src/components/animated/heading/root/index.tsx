import React from 'react';

import classNames from 'classnames';

import { Heading } from 'design/components';

import { useAnimated } from 'design/components/animated/context';
import { Words } from 'design/components/animated/words';
import { Zoom } from 'design/components/animated/zoom';

import { CLASS_NAME } from 'design/components/animated/constants';

type Props = React.ComponentProps<typeof Heading>;

const Root: React.FunctionComponent<Props> = ({ className, ...props }) => {
  const { property, text } = useAnimated();

  if (text === null) {
    return null;
  }

  return (
    <Zoom>
      <Heading
        {...props}
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--property--${property}`,
          className
        )}
      >
        <Words />
      </Heading>
    </Zoom>
  );
};

export { Root };
