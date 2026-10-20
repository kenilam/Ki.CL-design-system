import React, { useState } from 'react';

import {
  Button,
  Combobox,
  ComboboxAnchor,
  ComboboxContent,
  Input,
  Layout,
  List,
  ListItem,
} from 'design/components';

import type { Props } from 'design/components/combobox/docs/controls';

import { CITIES } from 'design/components/combobox/docs/constants';

const Preview: React.FC<Props> = (props) => {
  const [query, setQuery] = useState('');
  const matches = CITIES.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    // Room above the field for the list, as near the bottom of a screen.
    <Layout alignContent='end'>
      <Combobox className='kicl-min-block-size-columns-3' open {...props}>
        <ComboboxAnchor>
          <Input
            aria-label='City'
            onChange={(event) => setQuery(event.target.value)}
            placeholder='Search a city'
            value={query}
          />
        </ComboboxAnchor>
        <ComboboxContent aria-label='Cities' placement='block-start'>
          <List gap='narrow'>
            {matches.map((city) => (
              <ListItem key={city}>
                <Button
                  className='kicl-inline-size-full'
                  onClick={() => setQuery(city)}
                  variant='secondary'
                >
                  {city}
                </Button>
              </ListItem>
            ))}
          </List>
        </ComboboxContent>
      </Combobox>
    </Layout>
  );
};

export { Preview };
