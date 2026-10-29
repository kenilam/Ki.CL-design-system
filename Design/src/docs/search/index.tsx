import React, { useEffect, useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Combobox,
  ComboboxAnchor,
  ComboboxContent,
  HyperLink,
  List,
  ListItem,
  SearchInput,
  Text,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/docs/context';

import { type Entry, useEntries } from './use-entries';

const LIMIT = 12;

const rank = (query: string) => {
  return (a: Entry, b: Entry) => {
    return (
      Number(a.code) - Number(b.code) ||
      Number(!a.name.toLowerCase().startsWith(query)) -
        Number(!b.name.toLowerCase().startsWith(query)) ||
      a.name.length - b.name.length
    );
  };
};

const Search: React.FunctionComponent<
  Pick<React.ComponentProps<'div'>, 'className'>
> = ({ className }) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const { describe, entries, load } = useEntries();
  const field = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;

      if (
        event.key === '/' &&
        !target.isContentEditable &&
        !['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName)
      ) {
        event.preventDefault();
        field.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const normalised = query.trim().toLowerCase();
  const matches = normalised
    ? entries
        .filter(({ name }) => {
          return name.toLowerCase().includes(normalised);
        })
        .sort(rank(normalised))
        .slice(0, LIMIT)
    : [];

  return (
    <search className={className}>
      <Combobox open={normalised ? undefined : false}>
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
        <ComboboxContent aria-label={t('docs_search_results')}>
          {matches.length ? (
            <List gap='normal'>
              {matches.map((entry) => {
                return (
                  <ListItem gap='narrowest' key={`${entry.name}:${entry.path}`}>
                    <HyperLink
                      className={classNames({
                        'kicl-font-family-mono': entry.code,
                      })}
                      onClick={() => {
                        setQuery('');
                      }}
                      to={parsePath(entry.path)}
                    >
                      {entry.name}
                    </HyperLink>
                    <Text className='kicl-font-size-small' variant='secondary'>
                      {describe(entry)}
                    </Text>
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Text>{t('docs_search_empty', { query: query.trim() })}</Text>
          )}
        </ComboboxContent>
      </Combobox>
    </search>
  );
};

export { Search };
