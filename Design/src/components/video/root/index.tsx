import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Constants
import { CLASS_NAME } from 'design/components/video/constants';

// Partials
import { Loading } from './loading';
import { Player } from './player';

type Props = Pick<React.ComponentProps<'figure'>, 'className' | 'ref'>;

const Root: React.FunctionComponent<Props> = ({ className, ref }) => {
  // A video is a replaced element, which only stretches to its cell when told.
  return (
    <Layout alignItems='stretch' justifyItems='stretch' ref={ref}>
      <figure
        className={classNames(
          CLASS_NAME,
          'kicl-overflow-hidden',
          'kicl-position-relative',
          className
        )}
      >
        <Player />
        <Loading />
      </figure>
    </Layout>
  );
};

export { Root };
