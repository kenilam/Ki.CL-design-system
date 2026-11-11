import { useState } from 'react';

// Partials
import { rank } from './rank';
import { useEntries } from './use-entries';

const LIMIT = 12;

const useSearch = () => {
  const { describe, entries, load } = useEntries();
  const [query, setQuery] = useState('');

  const normalised = query.trim().toLowerCase();
  const matches = normalised
    ? entries
        .filter(({ name }) => {
          return name.toLowerCase().includes(normalised);
        })
        .sort(rank(normalised))
        .slice(0, LIMIT)
    : [];

  return { describe, load, matches, query, setQuery };
};

export { useSearch };
