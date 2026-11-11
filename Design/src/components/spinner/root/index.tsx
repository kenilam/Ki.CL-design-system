import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, Layout, Text } from 'design/components';

// Context
import { useSpinner } from 'design/components/spinner/context';

// Constants
import {
  BACKDROP_DURATION,
  CLASS_NAME,
} from 'design/components/spinner/constants';

// Helpers
import { delayAfter } from 'design/components/spinner/delay-after';

// Partials
import { Icon } from './icon';
import { Label } from './label';

const Root: React.FunctionComponent = () => {
  const spinner = useSpinner();

  const delay =
    spinner.isOverlay && !spinner.entering
      ? delayAfter(spinner.delay, spinner.duration)
      : spinner.delay;

  return (
    <Animation
      {...spinner.animation}
      delay={delay}
      duration={BACKDROP_DURATION}
      in={spinner.entering}
    >
      <Layout
        display={spinner.isOverlay ? 'grid' : 'inline-grid'}
        alignContent='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
      >
        <Text
          className={classNames(
            'kicl-line-height-dense',
            CLASS_NAME,
            {
              'kicl-inset-0': spinner.isOverlay,
              'kicl-position-absolute': spinner.isOverlay,
              'kicl-z-index-overlay': spinner.isOverlay,
              'kicl-backdrop': spinner.isOverlay && spinner.backdrop,
              [`${CLASS_NAME}--overlay`]: spinner.isOverlay,
              [`${CLASS_NAME}--size--${spinner.size}`]: spinner.size,
            },
            spinner.className
          )}
          is='span'
          role='status'
          unstyled
        >
          <Label />
          <Icon />
        </Text>
      </Layout>
    </Animation>
  );
};

export { Root };
