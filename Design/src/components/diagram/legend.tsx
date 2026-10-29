import React from 'react';

// Components
import { Layout, List, ListItem, Text } from 'design/components';

// Spec
import type { LegendItem } from './spec';
import classNames from 'classnames';

type Props = {
  items: LegendItem[];
};

const Legend: React.FunctionComponent<Props> = ({ items }) => {
  return (
    <List display='flex' gap='narrow' wrap>
      {items.map(({ label, level, value }) => {
        return (
          <ListItem key={label}>
            <Layout
              alignContent='center'
              alignItems='center'
              autoFlow='column'
              display='inline-grid'
              gap='narrow'
              justifyContent='center'
              justifyItems='center'
            >
              <Text
                level={level}
                className={classNames(
                  'kicl-border-radius-sm',
                  'kicl-padding-inline-end-narrow'
                )}
                is='code'
                variant='secondary'
              >
                <Text
                  level={level}
                  className={classNames(
                    'kicl-line-height-narrower',
                    'kicl-padding-inline-narrower'
                  )}
                  is='code'
                >
                  {label}
                </Text>
                <Text
                  is='span'
                  dense
                  className={classNames(
                    'kicl-font-family',
                    'kicl-font-weight-light',
                    'kicl-line-height-narrower'
                  )}
                >
                  {value}
                </Text>
              </Text>
            </Layout>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Legend };
