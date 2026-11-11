import React, { useEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout, ListItem, Text } from 'design/components';

// Helpers
import { toHex } from 'design/docs/tokens/to-hex';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { usePalette } from 'design/docs/tokens/docs/color/palette/context';

type Props = { token: string };

const Token: React.FunctionComponent<Props> = ({ token }) => {
  const { theme } = useResponsive();
  const { probe: probeRef } = usePalette();
  const [hex, setHex] = useState<string>();

  useEffect(() => {
    if (!probeRef.current) {
      return;
    }

    setHex(toHex(probeRef.current, `color-${token}`));
  }, [probeRef, theme, token]);

  return (
    <ListItem gap='narrowest'>
      <Layout autoFlow='column' justifyContent='space-between'>
        <Text className='kicl-font-size-small' is='p'>
          <span>{token}</span>
          <Text className='kicl-font-family-mono' is='span' variant='secondary'>
            {hex}
          </Text>
        </Text>
      </Layout>
      <span
        aria-hidden
        className={classNames(
          'kicl-border-radius-sm',
          'kicl-box-shadow-overlay',
          'kicl-padding-block'
        )}
        style={{ backgroundColor: `var(--kicl-color-${token})` }}
      />
    </ListItem>
  );
};

export { Token };
