import React from 'react';

// Components
import { Layout } from 'design/components/layout';

// Context
import { useColorPicker } from 'design/components/color-picker/context';

// Partials
import { Format } from './format';

// Constants
import { CLASS_NAME } from 'design/components/color-picker/constants';

const FORMATS = ['hex', 'oklch'] as const;

// The output is what a form item's label names when the picker is in place.
const Value: React.FunctionComponent = () => {
  const { control, presentation } = useColorPicker();

  return (
    <Layout autoFlow='row' gap='none' justifyItems='start'>
      <output
        aria-describedby={control['aria-describedby']}
        aria-live='off'
        className={`${CLASS_NAME}__value`}
        id={presentation === 'widget' ? control.id : undefined}
      >
        {FORMATS.map((format) => {
          return <Format format={format} key={format} />;
        })}
      </output>
    </Layout>
  );
};

export { Value };
