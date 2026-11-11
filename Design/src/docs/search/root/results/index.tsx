import React from 'react';

// Components
import { ComboboxContent, List, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useSearchContext } from 'design/docs/search/context';
import { idOf } from './id-of';
import { Result } from './result';

const Results: React.FunctionComponent = () => {
  const t = useCopy();
  const { matches, query } = useSearchContext();

  return (
    <ComboboxContent aria-label={t('docs_search_results')}>
      {matches.length ? (
        <List gap='normal'>
          {matches.map((match) => {
            const id = idOf(match);

            return <Result id={id} key={id} />;
          })}
        </List>
      ) : (
        <Text>{t('docs_search_empty', { query: query.trim() })}</Text>
      )}
    </ComboboxContent>
  );
};

export { Results };
