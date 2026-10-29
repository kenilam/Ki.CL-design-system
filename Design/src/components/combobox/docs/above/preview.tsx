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
  const matches = CITIES.filter((city) => {
    return city.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <Layout alignContent='end'>
      <search className='kicl-min-block-size-columns-3'>
        <Combobox open {...props}>
          <ComboboxAnchor>
            <Input
              aria-label='City'
              onChange={(event) => {
                setQuery(event.target.value);
              }}
              placeholder='Search a city'
              value={query}
            />
          </ComboboxAnchor>
          <ComboboxContent aria-label='Cities' placement='block-start'>
            <List gap='narrow'>
              {matches.map((city) => {
                return (
                  <ListItem key={city}>
                    <Button
                      className='kicl-inline-size-full'
                      onClick={() => {
                        setQuery(city);
                      }}
                      variant='secondary'
                    >
                      {city}
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </ComboboxContent>
        </Combobox>
      </search>
    </Layout>
  );
};

export { Preview };
