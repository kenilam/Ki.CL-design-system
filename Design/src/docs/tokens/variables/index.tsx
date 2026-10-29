import React, { useEffect, useRef, useState } from 'react';

// Components
import { Layout, List, ListItem, Text } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Helpers
import { toHex } from './to-hex';

// Spec
import type { ColumnSpan } from 'design/components/spec';
import type { HeadingIs } from 'design/components/heading/spec';

type Props = {
  fill?: ColumnSpan;
  names: string[];
  preview?: React.FunctionComponent<{ name: string }>;
  property?: string;
  scope?: HeadingIs;
};

const Variables: React.FunctionComponent<Props> = ({
  fill = 6,
  names,
  preview: Preview,
  property,
  scope: Probe = 'span',
}) => {
  const { isMobile, theme } = useResponsive();
  const probe = useRef<HTMLElement>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!probe.current) {
      return;
    }

    const measured = getComputedStyle(probe.current);

    setValues(
      Object.fromEntries(
        names.map((name) => {
          const value = measured.getPropertyValue(`--kicl-${name}`).trim();

          if (
            probe.current &&
            /^(#|rgb|hsl|oklab|oklch|lab|lch|color)/.test(value)
          ) {
            return [name, toHex(probe.current, name)];
          }

          if (!/^(calc|clamp|min|max)\(|^[\d.]+rem$/.test(value)) {
            return [name, value];
          }

          probe.current?.style.setProperty(
            'inline-size',
            `var(--kicl-${name})`
          );

          return [
            name,
            `${Math.round(parseFloat(measured.inlineSize) * 100) / 100}px`,
          ];
        })
      )
    );
  }, [names, theme]);

  return (
    <>
      {React.createElement(Probe, {
        'aria-hidden': true,
        className: 'kicl-hidden',
        ref: probe,
      })}
      <List alignItems='start' fill={isMobile ? 12 : fill} gap='normal'>
        {names.map((name) => {
          return (
            <ListItem fill={12} gap='narrowest' justifyItems='start' key={name}>
              <Layout alignItems='center' autoFlow='column' gap='narrow'>
                <span>
                  <Text is='code'>{`--kicl-${name}`}</Text>
                  {values[name]?.startsWith('#') ? (
                    <span
                      aria-hidden
                      className='kicl-border-radius-xs kicl-box-shadow-overlay kicl-padding-narrow'
                      style={{ backgroundColor: `var(--kicl-${name})` }}
                    />
                  ) : null}
                </span>
              </Layout>
              <Text
                className='kicl-font-family-mono kicl-font-size-small'
                is='span'
              >
                {`${property ?? `--kicl-${name}`}: ${values[name] ?? ''}`}
              </Text>
              {Preview ? <Preview name={name} /> : null}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export { Variables };
