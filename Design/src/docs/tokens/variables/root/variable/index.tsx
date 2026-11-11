import React, { useEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout, ListItem, Text } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { useVariables } from 'design/docs/tokens/variables/context';

// Partials
import { measure } from './measure';

type Props = { name: string };

const Variable: React.FunctionComponent<Props> = ({ name }) => {
  const { theme } = useResponsive();
  const { preview: Preview, probe: probeRef, property } = useVariables();
  const [value, setValue] = useState<string>();

  useEffect(() => {
    if (!probeRef.current) {
      return;
    }

    setValue(measure(probeRef.current, name));
  }, [name, probeRef, theme]);

  return (
    <ListItem fill={12} gap='narrowest' justifyItems='start'>
      <Layout alignItems='center' autoFlow='column' gap='narrow'>
        <span>
          <Text is='code'>{`--kicl-${name}`}</Text>
          {value?.startsWith('#') ? (
            <span
              aria-hidden
              className={classNames(
                'kicl-border-radius-xs',
                'kicl-box-shadow-overlay',
                'kicl-padding-narrow'
              )}
              style={{ backgroundColor: `var(--kicl-${name})` }}
            />
          ) : null}
        </span>
      </Layout>
      <Text
        className={classNames('kicl-font-family-mono', 'kicl-font-size-small')}
        is='span'
      >
        {`${property ?? `--kicl-${name}`}: ${value ?? ''}`}
      </Text>
      {Preview ? <Preview name={name} /> : null}
    </ListItem>
  );
};

export { Variable };
