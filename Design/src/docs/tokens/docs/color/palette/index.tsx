import React, { useEffect, useRef, useState } from 'react';

// Components
import {
  Card,
  CardTitle,
  Layout,
  List,
  ListItem,
  Text,
} from 'design/components';

// Helpers
import { toHex } from 'design/docs/tokens/variables/to-hex';

// Hooks
import { useResponsive } from 'design/hooks';

// Spec
import type { Swatch } from '../constants';

type Props = {
  swatches: Swatch[];
};

const Palette: React.FunctionComponent<Props> = ({ swatches }) => {
  const { isMobile, isTablet, theme } = useResponsive();
  const probe = useRef<HTMLSpanElement>(null);
  const [hexes, setHexes] = useState<Record<string, string>>({});

  useEffect(() => {
    const element = probe.current;

    if (!element) {
      return;
    }

    setHexes(
      Object.fromEntries(
        swatches
          .flatMap(({ tokens }) => {
            return tokens;
          })
          .map((token) => {
            return [token, toHex(element, `color-${token}`)];
          })
      )
    );
  }, [swatches, theme]);

  return (
    <>
      <span aria-hidden className='kicl-hidden' ref={probe} />
      <List
        alignItems='start'
        fill={isMobile ? 12 : isTablet ? 6 : 3}
        gap='normal'
      >
        {swatches.map(({ name, tokens }) => {
          return (
            <Card
              header={
                <CardTitle is='h4'>
                  <Text is='code'>{name}</Text>
                </CardTitle>
              }
              is='li'
              key={name}
            >
              <List gap='narrow' is='ol'>
                {tokens.map((token) => {
                  return (
                    <ListItem gap='narrowest' key={token}>
                      <Layout autoFlow='column' justifyContent='space-between'>
                        <Text className='kicl-font-size-small' is='p'>
                          <span>{token}</span>
                          <Text
                            className='kicl-font-family-mono'
                            is='span'
                            variant='secondary'
                          >
                            {hexes[token]}
                          </Text>
                        </Text>
                      </Layout>
                      <span
                        aria-hidden
                        className='kicl-border-radius-sm kicl-box-shadow-overlay kicl-padding-block'
                        style={{
                          backgroundColor: `var(--kicl-color-${token})`,
                        }}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Card>
          );
        })}
      </List>
    </>
  );
};

export { Palette };
