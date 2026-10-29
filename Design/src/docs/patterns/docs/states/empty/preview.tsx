import React, { useState } from 'react';

import {
  Button,
  Card,
  CardDescription,
  CardTitle,
  List,
  ListItem,
  Menu,
  Text,
} from 'design/components';

const Preview: React.FC = () => {
  const [orders, setOrders] = useState<string[]>([]);

  const add = () => {
    setOrders([...orders, `Order ${1040 + orders.length}`]);
  };

  return (
    <Card
      is='section'
      footer={
        <Menu aria-label='Orders' justifyContent='end'>
          {orders.length > 0 ? (
            <Button
              onClick={() => {
                setOrders([]);
              }}
              variant='tertiary'
            >
              Clear
            </Button>
          ) : null}
          <Button onClick={add}>Place an order</Button>
        </Menu>
      }
      header={
        <>
          <CardTitle is='h3'>Your orders</CardTitle>
          {!orders.length ? (
            <CardDescription>
              No orders yet. Anything you order shows up here.
            </CardDescription>
          ) : null}
        </>
      }
      size={5}
    >
      {orders.length > 0 ? (
        <List gap='narrow'>
          {orders.map((order) => {
            return (
              <ListItem key={order}>
                <Text is='span'>{order}</Text>
              </ListItem>
            );
          })}
        </List>
      ) : null}
    </Card>
  );
};

export { Preview };
