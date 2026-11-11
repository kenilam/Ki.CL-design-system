// Spec
import type { LanguageSelectProps } from 'design/widgets/language-select';

const useOptions = <Tag extends string>({
  languages,
  value,
}: Pick<LanguageSelectProps<Tag>, 'languages' | 'value'>) => {
  return languages
    .map((language) => {
      const { acceptLanguage, complete } = language;

      // CLDR gives the mid-sentence form, `français`; a menu starts with a capital.
      const name =
        new Intl.DisplayNames([acceptLanguage], {
          style: 'short',
          type: 'language',
        }).of(acceptLanguage) ?? acceptLanguage;

      return {
        ...language,
        available: complete === true || acceptLanguage === value,
        name: `${name.charAt(0).toLocaleUpperCase(acceptLanguage)}${name.slice(1)}`,
      };
    })
    .sort((a, b) => {
      if (a.available !== b.available) {
        return a.available ? -1 : 1;
      }

      // One collation for every page language, so the order never moves.
      return a.name.localeCompare(b.name, 'en-US');
    });
};

export { useOptions };
