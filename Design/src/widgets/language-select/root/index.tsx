import React, { useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Select, SelectTrigger } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useLanguageSelect } from 'design/widgets/language-select/context';

// Spec
import type { LanguageSelectProps } from 'design/widgets/language-select';

// Partials
import { Face } from './face';
import { Options } from './options';

const CLASS_NAME = 'kicl--widgets--language-select';

type Props<Tag extends string> = Omit<
  LanguageSelectProps<Tag>,
  'inline' | 'languages' | 'value'
>;

const Root = <Tag extends string>({
  'aria-busy': waiting = false,
  className,
  onValueChange,
  placement,
}: Props<Tag>) => {
  const t = useCopy();
  const { inline, options, value } = useLanguageSelect();
  const [loading, setLoading] = useState(false);

  return (
    <Select
      aria-busy={waiting || loading}
      aria-label={t('label_language')}
      className={classNames(CLASS_NAME, className)}
      disabled={waiting}
      inline={inline}
      placement={placement}
      onValueChange={(picked) => {
        const option = options.find(({ acceptLanguage }) => {
          return acceptLanguage === picked;
        });

        if (!option || loading) {
          return;
        }

        setLoading(true);

        // A promise keeps the spinner up until the change has loaded.
        void Promise.resolve(
          onValueChange?.(option.acceptLanguage as Tag)
        ).finally(() => {
          setLoading(false);
        });
      }}
      value={value}
    >
      <SelectTrigger>
        <Face />
      </SelectTrigger>
      <Options />
    </Select>
  );
};

export { Root };
