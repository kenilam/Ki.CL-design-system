import React from 'react';

// Components
import { SelectTrigger, SelectValue } from 'design/components';

// Context
import { useLanguageSelect } from 'design/widgets/language-select/context';

// Partials
import { flagOf } from 'design/widgets/language-select/root/flag-of';

const Trigger: React.FunctionComponent = () => {
  const { inline, options, value } = useLanguageSelect();

  const current = options.find(({ acceptLanguage }) => {
    return acceptLanguage === value;
  });

  let face: React.ReactNode = <SelectValue />;

  if (inline) {
    face = current
      ? flagOf(current.acceptLanguage) || [...current.name][0]
      : undefined;
  }

  return <SelectTrigger>{face}</SelectTrigger>;
};

export { Trigger };
