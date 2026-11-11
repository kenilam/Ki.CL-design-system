import React from 'react';

// Components
import { Segmented, SegmentedItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useDocsCopy } from 'design/mdx/copy';
import { usePreviewContext } from 'design/mdx/preview/context';

const Presets: React.FunctionComponent = () => {
  const t = useCopy();
  const docsCopy = useDocsCopy();
  const { chosen, pick, presets } = usePreviewContext();

  if (presets.length < 2) {
    return null;
  }

  return (
    <Segmented
      className='kicl-justify-self-start'
      collapse='popover'
      collapsed
      onValueChange={pick}
      value={chosen}
    >
      <legend>{t('docs_preset')}</legend>
      {presets.map(({ props: { label, name } }) => {
        return (
          <SegmentedItem key={name} value={name}>
            {docsCopy(label)}
          </SegmentedItem>
        );
      })}
    </Segmented>
  );
};

export { Presets };
