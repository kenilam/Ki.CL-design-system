import React, { useEffect, useState } from 'react';

import {
  Button,
  Card,
  CardTitle,
  List,
  ListItem,
  Skeleton,
  Text,
} from 'design/components';

const ORDERS = [
  'Order 1042, two items',
  'Order 1038, one item',
  'Order 1031, four items',
];

const Preview: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <Card
      is='section'
      aria-busy={loading}
      footer={
        <Button
          aria-disabled={loading}
          onClick={() => {
            setLoading(true);
          }}
          variant='secondary'
        >
          Reload
        </Button>
      }
      header={<CardTitle is='h3'>Recent orders</CardTitle>}
      size={5}
    >
      {loading ? (
        <Text className='kicl-hidden'>Loading your orders</Text>
      ) : null}
      <List gap='narrow'>
        {ORDERS.map((order) => {
          return (
            <ListItem key={order}>
              {loading ? <Skeleton /> : <Text is='span'>{order}</Text>}
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export { Preview };
