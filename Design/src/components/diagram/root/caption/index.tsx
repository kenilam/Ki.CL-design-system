import React from 'react';

// Components
import { Text } from 'design/components';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Legend } from 'design/components/diagram/legend';

const Caption: React.FunctionComponent = () => {
  const { spec } = useDiagram();

  if (!spec.caption && !spec.legend) {
    return spec.description ? (
      <figcaption className='kicl-hidden'>{spec.description}</figcaption>
    ) : null;
  }

  return (
    <figcaption className='kicl-padding-block-start-narrow'>
      {spec.legend ? <Legend items={spec.legend} /> : null}
      {spec.caption ? (
        <Text
          className='kicl-font-size-small'
          dense
          is='span'
          variant='secondary'
        >
          {spec.caption}
        </Text>
      ) : null}
      {spec.description ? (
        <span className='kicl-hidden'> {spec.description}</span>
      ) : null}
    </figcaption>
  );
};

export { Caption };
