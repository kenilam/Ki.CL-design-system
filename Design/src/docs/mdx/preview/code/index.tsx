import React from 'react';

// Libraries
import classNames from 'classnames';
import { Highlight, themes } from 'prism-react-renderer';

// Components
import {
  Card,
  CardContent,
  CardTitle,
  CopyButton,
  Text,
} from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

type Props = { children: string } & Pick<
  React.ComponentProps<typeof CardContent>,
  'className'
>;

/** A block of JSX, highlighted, in a card whose header holds the button that copies it. */
const Code: React.FunctionComponent<Props> = ({ children, className }) => {
  const t = useCopy();
  const { theme } = useResponsive();

  return (
    <Card
      gap='narrow'
      header={<CardTitle is='h3'>{t('docs_code')}</CardTitle>}
      size='default'
    >
      <CardContent className={classNames('kicl-position-relative', className)}>
        <Highlight
          code={children}
          language='tsx'
          theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
        >
          {({ getLineProps, getTokenProps, tokens }) => (
            <Text
              // A long line wraps, as `pre` does here, so a phone sees it all.
              className={classNames(
                'kicl-inline-size-full',
                'kicl-line-height-wide'
              )}
              is='pre'
            >
              <Text is='code'>
                {tokens.map((line, index) => (
                  <span {...getLineProps({ line })} key={index}>
                    {line.map((token, position) => (
                      <span {...getTokenProps({ token })} key={position} />
                    ))}
                    {'\n'}
                  </span>
                ))}
              </Text>
            </Text>
          )}
        </Highlight>
        <CopyButton
          className={classNames(
            'kicl-position-absolute',
            'kicl-inset-block-start',
            'kicl-inset-inline-end',
            'kicl-z-index-floating'
          )}
          size='small'
          value={children}
          variant='secondary'
        />
      </CardContent>
    </Card>
  );
};

export { Code };
