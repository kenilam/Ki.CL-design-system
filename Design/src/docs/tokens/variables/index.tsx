import React, { useEffect, useRef, useState } from 'react';

// Components
import { Layout, List, ListItem, Text } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

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
    const canvas = document.createElement('canvas').getContext('2d', {
      willReadFrequently: true,
    });

    setValues(
      Object.fromEntries(
        names.map((name) => {
          const value = measured.getPropertyValue(`--kicl-${name}`).trim();

          if (canvas && /^(#|rgb|hsl|oklab|oklch|lab|lch|color)/.test(value)) {
            probe.current?.style.setProperty('color', `var(--kicl-${name})`);
            canvas.clearRect(0, 0, 1, 1);
            canvas.fillStyle = measured.color;
            canvas.fillRect(0, 0, 1, 1);

            return [
              name,
              `#${Array.from(canvas.getImageData(0, 0, 1, 1).data.slice(0, 3))
                .map((channel) => channel.toString(16).padStart(2, '0'))
                .join('')}`,
            ];
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
        {names.map((name) => (
          <ListItem fill={12} gap='narrowest' justifyItems='start' key={name}>
            <Layout alignItems='center' autoFlow='column' gap='narrow'>
              <span>
                <Text is='code'>{`--kicl-${name}`}</Text>
                {values[name]?.startsWith('#') && (
                  <span
                    aria-hidden
                    className='kicl-border-radius-xs kicl-box-shadow-overlay kicl-padding-narrow'
                    style={{ backgroundColor: `var(--kicl-${name})` }}
                  />
                )}
              </span>
            </Layout>
            <Text
              className='kicl-font-family-mono kicl-font-size-small'
              is='span'
            >
              {`${property ?? `--kicl-${name}`}: ${values[name] ?? ''}`}
            </Text>
            {Preview && <Preview name={name} />}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export { Variables };
