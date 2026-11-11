import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, Layout } from 'design/components';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { useImage } from 'design/components/image/context';

// Constants
import { CLASS_NAME } from 'design/components/image/constants';

const Placeholder: React.FunctionComponent = () => {
  const image = useImage();

  let placeholder = image.placeholder;

  if (placeholder === undefined) {
    placeholder = (
      <Tb.TbFileX
        className={classNames('kicl-color-warning', 'kicl-font-size-large')}
      />
    );
  }

  return (
    <Animation in={image.hasError} duration='faster' property='blur'>
      <Layout>
        <span
          aria-hidden
          className={classNames(
            `${CLASS_NAME}--error`,
            'kicl-inset-block-center',
            'kicl-inset-inline-center',
            'kicl-position-absolute'
          )}
          data-src={image.data}
        >
          {placeholder}
        </span>
      </Layout>
    </Animation>
  );
};

export { Placeholder };
