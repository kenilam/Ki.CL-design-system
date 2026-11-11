import React, { createContext, useContext } from 'react';

// Spec
import type { LanguageSelectProps } from 'design/widgets/language-select';

// Partials
import { useOptions } from './use-options';

type LanguageSelect = {
  inline: boolean;
  options: ReturnType<typeof useOptions>;
  value?: string;
};

const LanguageSelectContext = createContext<LanguageSelect | null>(null);

type Props<Tag extends string> = React.PropsWithChildren<
  Pick<LanguageSelectProps<Tag>, 'languages' | 'value'> & { inline: boolean }
>;

const Provider = <Tag extends string>({
  children,
  inline,
  languages,
  value,
}: Props<Tag>) => {
  const options = useOptions({ languages, value });

  return (
    <LanguageSelectContext.Provider value={{ inline, options, value }}>
      {children}
    </LanguageSelectContext.Provider>
  );
};

const useLanguageSelect = () => {
  const languageSelect = useContext(LanguageSelectContext);

  if (!languageSelect) {
    throw new Error('useLanguageSelect needs a LanguageSelect around it.');
  }

  return languageSelect;
};

export { Provider, useLanguageSelect };
