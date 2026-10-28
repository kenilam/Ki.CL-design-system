import React, { useState } from 'react';

import {
  Badge,
  Button,
  Card,
  CardTitle,
  Layout,
  List,
  ListItem,
  Sheet,
  Switch,
  Text,
} from 'design/components';

const PRODUCTS = [
  { delivery: true, name: 'Desk lamp', stock: true },
  { delivery: false, name: 'Bookshelf', stock: true },
  { delivery: true, name: 'Floor rug', stock: false },
  { delivery: true, name: 'Armchair', stock: true },
  { delivery: false, name: 'Side table', stock: false },
];

const Preview: React.FC = () => {
  const [applied, setApplied] = useState({ delivery: false, stock: false });
  const [draft, setDraft] = useState(applied);

  const filter = ({ delivery, stock }: typeof applied) =>
    PRODUCTS.filter(
      (product) => (!stock || product.stock) && (!delivery || product.delivery)
    );
  const results = filter(applied);
  const matches = filter(draft);
  const active = Number(applied.stock) + Number(applied.delivery);

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
            <CardTitle is='h3'>Living room</CardTitle>
            <Button
              after={active ? <Badge>{active}</Badge> : undefined}
              onClick={() => setDraft(applied)}
              popoverTarget='pattern-filters'
              size='small'
              variant='secondary'
            >
              Filters
            </Button>
          </div>
        </Layout>
      }
      size={5}
    >
      <List gap='narrow'>
        {results.map(({ name }) => (
          <ListItem key={name}>
            <Text is='span'>{name}</Text>
          </ListItem>
        ))}
      </List>
      <Sheet
        footer={
          <Button
            onClick={() => setApplied(draft)}
            popoverTarget='pattern-filters'
            popoverTargetAction='hide'
          >
            Show {matches.length} results
          </Button>
        }
        header={<CardTitle is='h2'>Filters</CardTitle>}
        id='pattern-filters'
      >
        <Layout gap='normal'>
          <div>
            <Switch
              checked={draft.stock}
              onCheckedChange={(stock) => setDraft({ ...draft, stock })}
            >
              In stock only
            </Switch>
            <Switch
              checked={draft.delivery}
              onCheckedChange={(delivery) => setDraft({ ...draft, delivery })}
            >
              Free delivery
            </Switch>
          </div>
        </Layout>
      </Sheet>
    </Card>
  );
};

export { Preview };
