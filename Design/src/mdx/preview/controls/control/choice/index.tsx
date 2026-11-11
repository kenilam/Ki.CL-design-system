import React from 'react';

// Components
import { Segmented, SegmentedItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { UNSET, useOptions } from './use-options';

type Props = { name: string };

const Choice: React.FunctionComponent<Props> = ({ name }) => {
  const t = useCopy();
  const { set, values } = usePreviewContext();

  const { fallback, options } = useOptions(name);

  return (
    <Segmented
      collapse='popover'
      collapsed
      onValueChange={(value) => {
        const option =
          options.find((option) => {
            return String(option) === value;
          }) ?? value;

        set(name, option === fallback ? undefined : option);
      }}
      value={String(values[name] ?? fallback)}
    >
      <legend>{name}</legend>
      {fallback === UNSET ? (
        <SegmentedItem value={UNSET}>{t('docs_default')}</SegmentedItem>
      ) : null}
      {options.map((option) => {
        return (
          <SegmentedItem key={String(option)} value={String(option)}>
            {String(option)}
          </SegmentedItem>
        );
      })}
    </Segmented>
  );
};

export { Choice };
