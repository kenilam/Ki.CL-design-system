import React from 'react';

// Components
import { SelectItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useLanguageSelect } from 'design/widgets/language-select/context';

// Partials
import { flagOf } from 'design/widgets/language-select/root/flag-of';

type Props = Pick<
  ReturnType<typeof useLanguageSelect>['options'][number],
  'acceptLanguage'
>;

const Option: React.FunctionComponent<Props> = ({ acceptLanguage }) => {
  const t = useCopy();
  const { options } = useLanguageSelect();
  const option = options.find((item) => {
    return item.acceptLanguage === acceptLanguage;
  });

  if (!option) {
    return null;
  }

  const { available, complete, name, translating } = option;

  let note: string | undefined;

  if (complete === false) {
    note = t(
      translating ? 'language_incomplete_translating' : 'language_incomplete'
    );
  }

  return (
    <SelectItem
      aria-busy={translating}
      disabled={!available}
      lang={acceptLanguage}
      title={note}
      value={acceptLanguage}
    >
      <bdi>{name}</bdi> {flagOf(acceptLanguage)}
    </SelectItem>
  );
};

export { Option };
