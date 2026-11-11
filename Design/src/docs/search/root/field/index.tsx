import React from 'react';

// Components
import { ComboboxAnchor, SearchInput } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useSearchContext } from 'design/docs/search/context';
import { useShortcut } from './use-shortcut';

const Field: React.FunctionComponent = () => {
  const t = useCopy();
  const { load, query, setQuery } = useSearchContext();
  const field = useShortcut();

  return (
    <ComboboxAnchor>
      <SearchInput
        aria-keyshortcuts='/'
        aria-label={t('docs_search')}
        onFocus={load}
        onChange={(event) => {
          setQuery(event.target.value);
        }}
        placeholder={t('docs_search')}
        ref={field}
        value={query}
      />
    </ComboboxAnchor>
  );
};

export { Field };
