import React, { useState } from 'react';

import {
  Card,
  CardTitle,
  Layout,
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
        <Layout
          alignItems='center'
          autoFlow='column'
          frames='auto--max-content'
        >
          <div>
            <CardTitle is='h3'>Saved places</CardTitle>
            <Segmented aria-label='View' onValueChange={setView} value={view}>
              <SegmentedItem value='list'>List</SegmentedItem>
              <SegmentedItem value='grid'>Grid</SegmentedItem>
            </Segmented>
          </div>
        </Layout>
      }
      size={5}
    >
      <List fill={view === 'grid' ? 6 : 12} gap='narrow'>
        {PLACES.map((place) => (
          <Card is='li' key={place} size='default' variant='secondary'>
            <Text is='span'>{place}</Text>
          </Card>
        ))}
      </List>
    </Card>
  );
};

export { Preview };
