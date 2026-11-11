import React from 'react';

// Components
import type { SelectProps } from 'design/components';

// Partials
import { Provider } from './context';
import { Root } from './root';

// The design system doesn't load the API, so this is the part of its language status the widget reads. `Tag` is whatever the caller's tags are.
type LanguageSelectProps<Tag extends string> = Pick<
  SelectProps,
  'className' | 'inline' | 'placement'
> & {
  'aria-busy'?: boolean;
  languages: readonly {
    acceptLanguage: Tag;
    complete?: boolean;
    translating?: boolean;
  }[];
  onValueChange?: (acceptLanguage: Tag) => unknown;
  value?: Tag;
};

const LanguageSelect = <Tag extends string>({
  inline = true,
  languages,
  value,
  ...rest
}: LanguageSelectProps<Tag>) => {
  return (
    <Provider inline={inline} languages={languages} value={value}>
      <Root {...rest} />
    </Provider>
  );
};

export { LanguageSelect, type LanguageSelectProps };
