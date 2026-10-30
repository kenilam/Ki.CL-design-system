import React, { useState } from 'react';

// Components
import { Select, SelectItem, SelectTrigger, Spinner } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const CLASS_NAME = 'kicl--widgets--language-select';

// The design system doesn't load the API, so this is the part of its language status the widget reads. `Tag` is whatever the caller's tags are.
type LanguageSelectProps<Tag extends string> = {
  languages: readonly {
    acceptLanguage: Tag;
    complete?: boolean;
    translating?: boolean;
  }[];
  onValueChange?: (acceptLanguage: Tag) => unknown;
  value?: Tag;
};

const LanguageSelect = <Tag extends string>({
  languages,
  onValueChange,
  value,
}: LanguageSelectProps<Tag>) => {
  const t = useCopy();
  const [loading, setLoading] = useState(false);

  const options = languages
    .map(({ acceptLanguage, complete, translating }) => {
      // CLDR gives the mid-sentence form, `français`; a menu starts with a capital.
      const name =
        new Intl.DisplayNames([acceptLanguage], {
          style: 'short',
          type: 'language',
        }).of(acceptLanguage) ?? acceptLanguage;

      const locale = new Intl.Locale(acceptLanguage);

      // The tag's region, or where the language is most used when it has none (`es` is Spain), as its flag emoji. Chinese has none.
      let flag = '';

      if (locale.language !== 'zh') {
        flag = String.fromCodePoint(
          ...[...(locale.maximize().region ?? '')].map((letter) => {
            return 0x1f1e6 + letter.charCodeAt(0) - 'A'.charCodeAt(0);
          })
        );
      }

      let note: string | undefined;

      if (complete === false) {
        note = t(
          translating
            ? 'language_incomplete_translating'
            : 'language_incomplete'
        );
      }

      return {
        acceptLanguage,
        available: complete === true || acceptLanguage === value,
        busy: translating,
        flag,
        name: `${name.charAt(0).toLocaleUpperCase(acceptLanguage)}${name.slice(1)}`,
        note,
      };
    })
    .sort((a, b) => {
      if (a.available !== b.available) {
        return a.available ? -1 : 1;
      }

      // One collation for every page language, so the order never moves.
      return a.name.localeCompare(b.name, 'en-US');
    });

  const current = options.find(({ acceptLanguage }) => {
    return acceptLanguage === value;
  });

  let face: React.ReactNode = current?.flag || [...(current?.name ?? '')][0];

  if (loading) {
    face = <Spinner position='inline' size='small' />;
  }

  return (
    <Select
      aria-label={t('label_language')}
      className={CLASS_NAME}
      inline
      onValueChange={(picked) => {
        const option = options.find(({ acceptLanguage }) => {
          return acceptLanguage === picked;
        });

        if (!option) {
          return;
        }

        setLoading(true);

        // A promise keeps the spinner up until the change has loaded.
        void Promise.resolve(onValueChange?.(option.acceptLanguage)).finally(
          () => {
            setLoading(false);
          }
        );
      }}
      value={value}
    >
      <SelectTrigger>{face}</SelectTrigger>
      {options.map(({ acceptLanguage, available, busy, flag, name, note }) => {
        return (
          <SelectItem
            aria-busy={busy}
            disabled={!available}
            key={acceptLanguage}
            lang={acceptLanguage}
            title={note}
            value={acceptLanguage}
          >
            {[name, flag].join(' ').trim()}
          </SelectItem>
        );
      })}
    </Select>
  );
};

export { LanguageSelect, type LanguageSelectProps };
