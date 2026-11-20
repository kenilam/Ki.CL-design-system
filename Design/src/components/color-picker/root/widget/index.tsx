import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Partials
import { Channels } from './channels';
import { Preview } from './preview';
import { Value } from './value';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';

const Widget: React.FunctionComponent = () => {
  const { className, color, presentation } = useColorPicker();

  return (
    <Layout autoFlow='row' gap='none' justifyItems='stretch'>
      <div
        className={classNames(
          `${CLASS_NAME}__widget`,
          'kicl-inline-size-full',
          presentation === 'widget' ? className : null
        )}
        style={color.style}
      >
        <Preview />
        <Value />
        <Channels />
      </div>
    </Layout>
  );
};

export { Widget };
