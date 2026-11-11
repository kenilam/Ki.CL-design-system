import React from 'react';

// Components
import { SegmentedItem } from 'design/components';

// Partials
import { useDocsCopy } from 'design/mdx/copy';
import { usePreviewContext } from 'design/mdx/preview/context';
import type { PresetProps } from 'design/mdx/preview/preset';

type Props = Pick<PresetProps, 'name'>;

const Item: React.FunctionComponent<Props> = ({ name }) => {
  const docsCopy = useDocsCopy();
  const { presets } = usePreviewContext();
  const preset = presets.find(({ props }) => {
    return props.name === name;
  });

  if (!preset) {
    return null;
  }

  return (
    <SegmentedItem value={name}>{docsCopy(preset.props.label)}</SegmentedItem>
  );
};

export { Item };
