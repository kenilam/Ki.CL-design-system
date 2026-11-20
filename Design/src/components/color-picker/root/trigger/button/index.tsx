import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { INPUT_CLASS_NAME } from 'design/components';
import { Layout } from 'design/components/layout';
import { PopoverTrigger } from 'design/components/popover';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';
import { CLASS_NAME as INPUT_GROUP } from 'design/components/input-group/constants';

const Button: React.FunctionComponent = () => {
  const { className, color, control, copyable, disabled } = useColorPicker();

  return (
    <Layout
      alignItems='center'
      display='flex'
      gap='narrower'
      justifyContent='start'
    >
      <PopoverTrigger
        {...control}
        className={classNames(
          INPUT_CLASS_NAME,
          `${CLASS_NAME}__trigger`,
          'kicl-font-size-small',
          'kicl-inline-size-auto',
          'kicl-line-height',
          'kicl-text-align-start',
          copyable ? `${INPUT_GROUP}__control` : className
        )}
        disabled={disabled}
        style={color.style}
      >
        <span
          aria-hidden
          className={classNames(
            `${CLASS_NAME}__swatch`,
            'kicl-border-radius-full'
          )}
        />
        <bdi
          className={classNames(
            'kicl-font-family-mono',
            'kicl-text-transform-uppercase'
          )}
          dir='ltr'
        >
          {color.hex}
        </bdi>
      </PopoverTrigger>
    </Layout>
  );
};

export { Button };
