import React from 'react';

// Components
import { Card } from 'design/components';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { Controls } from 'design/mdx/preview/controls';
import { Description } from 'design/mdx/preview/description';
import { Figure } from 'design/mdx/preview/figure';
import { Output } from 'design/mdx/preview/output';
import { Presets } from 'design/mdx/preview/presets';
import { Snippet } from 'design/mdx/preview/snippet';

const Root: React.FunctionComponent = () => {
  const { preset } = usePreviewContext();

  return (
    <Card gap='normal' is='section' key={preset.props.name} variant='tertiary'>
      <Presets />
      <Description />
      <Figure />
      <Controls />
      <Snippet />
      <Output />
    </Card>
  );
};

export { Root };
