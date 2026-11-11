import React from 'react';

// Components
import { Segmented } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { Item } from './item';

const Presets: React.FunctionComponent = () => {
  const t = useCopy();
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
      {presets.map(({ props: { name } }) => {
        return <Item key={name} name={name} />;
      })}
    </Segmented>
  );
};

export { Presets };
