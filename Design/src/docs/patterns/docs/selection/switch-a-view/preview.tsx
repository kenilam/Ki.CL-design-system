import React, { useState } from 'react';

import {
  Card,
  CardAction,
  CardTitle,
  List,
  Segmented,
  SegmentedItem,
  Text,
} from 'design/components';

const PLACES = ['Lisbon', 'Porto', 'Madrid', 'Seville'];

const Preview: React.FC = () => {
  const [view, setView] = useState('list');

  return (
    <Card
      is='section'
      header={
        <>
          <CardTitle is='h3'>Saved places</CardTitle>
          <CardAction>
            <Segmented aria-label='View' onValueChange={setView} value={view}>
              <SegmentedItem value='list'>List</SegmentedItem>
              <SegmentedItem value='grid'>Grid</SegmentedItem>
            </Segmented>
          </CardAction>
        </>
      }
      size={5}
    >
      <List fill={view === 'grid' ? 6 : 12} gap='narrow'>
        {PLACES.map((place) => {
          return (
            <Card is='li' key={place} size='default' variant='secondary'>
              <Text is='span'>{place}</Text>
            </Card>
          );
        })}
      </List>
    </Card>
  );
};

export { Preview };
