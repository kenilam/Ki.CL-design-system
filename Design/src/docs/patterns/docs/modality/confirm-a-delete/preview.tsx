import React, { useState } from 'react';

import {
  Button,
  Card,
  CardTitle,
  Dialog,
  Heading,
  Layout,
  List,
  ListItem,
  Menu,
  Text,
} from 'design/components';

const DRAFTS = ['Trip to Lisbon', 'Birthday dinner', 'Office move'];

const Preview: React.FC = () => {
  const [drafts, setDrafts] = useState(DRAFTS);
  const [target, setTarget] = useState('');
  const [deleted, setDeleted] = useState('');

  return (
    <Card is='section' header={<CardTitle is='h3'>Drafts</CardTitle>} size={5}>
      <List gap='narrow'>
        {drafts.map((draft) => (
          <ListItem
            alignItems='center'
            autoFlow='column'
            frames='auto--max-content'
            key={draft}
          >
            <Text is='span'>{draft}</Text>
            <Button
              aria-label={`Delete ${draft}`}
              command='show-modal'
              commandFor='pattern-confirm'
              level='error'
              onClick={() => setTarget(draft)}
              size='small'
              variant='tertiary'
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
      <Layout
        alignItems='center'
        autoFlow='column'
        gap='normal'
        justifyContent='start'
      >
        <Text is='p' role='status'>
          {deleted && (
            <>
              Deleted {deleted}.{' '}
              <Button
                onClick={() => {
                  setDrafts(
                    DRAFTS.filter(
                      (draft) => draft === deleted || drafts.includes(draft)
                    )
                  );
                  setDeleted('');
                }}
                size='small'
                variant='secondary'
              >
                Undo
              </Button>
            </>
          )}
        </Text>
      </Layout>
      <Dialog
        footer={
          <Menu aria-label={`Delete ${target}`} justifyContent='end'>
            <Button
              command='close'
              commandFor='pattern-confirm'
              variant='tertiary'
            >
              Keep it
            </Button>
            <Button
              command='close'
              commandFor='pattern-confirm'
              level='error'
              onClick={() => {
                setDrafts(drafts.filter((draft) => draft !== target));
                setDeleted(target);
              }}
            >
              Delete
            </Button>
          </Menu>
        }
        header={
          <Heading dense is='h2' lookLike='h4'>
            Delete {target}?
          </Heading>
        }
        id='pattern-confirm'
      >
        <Text>It can't be brought back after you leave this page.</Text>
      </Dialog>
    </Card>
  );
};

export { Preview };
