import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout, ListItem, Text } from 'design/components';

// Spec
import type { LegendItem } from 'design/components/diagram/spec';

// Context
import { useLegend } from 'design/components/diagram/legend/context';

type Props = Pick<LegendItem, 'label'>;

const Item: React.FunctionComponent<Props> = ({ label }) => {
  const item = useLegend().find((entry) => {
    return entry.label === label;
  });

  if (!item) {
    return null;
  }

  const { level, value } = item;

  return (
    <ListItem>
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
};

export { Item };
