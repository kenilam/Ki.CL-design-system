import React from 'react';

import classNames from 'classnames';

import { Text } from 'design/components';

import { useAnimated } from 'design/components/animated/context';
import { Words } from 'design/components/animated/words';
import { Zoom } from 'design/components/animated/zoom';

import type { Options } from 'design/components/animated/spec';
import type * as Spec from 'design/components/animated/text/spec';

import { CLASS_NAME, ZOOMS } from 'design/components/animated/constants';

type Props = Omit<Spec.Props, keyof Options> &
  Pick<React.ComponentProps<typeof Text>, 'ref'>;

const Root: React.FunctionComponent<Props> = ({ className, ...props }) => {
  const { property, text } = useAnimated();

  if (text === null) {
    return null;
  }

  return (
    <Zoom>
      <Text
        {...(props as React.ComponentProps<typeof Text>)}
        className={classNames(
          CLASS_NAME,
          `${CLASS_NAME}--property--${property}`,
          { 'kicl-display-inline-block': ZOOMS.includes(property) },
          className
        )}
      >
        <Words />
      </Text>
    </Zoom>
  );
};

export { Root };
