import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { HyperLink, ListItem, Text } from 'design/components';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Partials
import { useSearchContext } from 'design/docs/search/context';
import { idOf } from 'design/docs/search/root/results/id-of';

type Props = { id: string };

const Result: React.FunctionComponent<Props> = ({ id }) => {
  const { parsePath } = useDocsContext();
  const { describe, matches, setQuery } = useSearchContext();
  const entry = matches.find((match) => {
    return idOf(match) === id;
  });

  if (!entry) {
    return null;
  }

  return (
    <ListItem gap='narrowest'>
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
};

export { Result };
