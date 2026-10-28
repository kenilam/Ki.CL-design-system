import React from 'react';

// Libraries
import classNames from 'classnames';
import { Highlight, themes } from 'prism-react-renderer';

// Components
import {
  Card,
  CardAction,
  CardTitle,
  CopyButton,
  Text,
} from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

type Props = {
  children: string;
  language?: 'markup' | 'tsx';
  title?: string;
} & Pick<React.ComponentProps<'pre'>, 'className'>;

/** A block of JSX or HTML, highlighted, in a card whose header holds the button that copies it. */
const Code: React.FunctionComponent<Props> = ({
  children,
  className,
  language = 'tsx',
  title,
}) => {
  const t = useCopy();
  const { theme } = useResponsive();

  return (
    <Card
      gap='narrow'
      header={
        <>
          <CardTitle is='h3'>{title ?? t('docs_code')}</CardTitle>
          <CardAction>
            <CopyButton size='small' value={children} variant='secondary' />
          </CardAction>
        </>
      }
      is='section'
      size='default'
    >
      <Highlight
        code={children}
        language={language}
        theme={theme === 'dark' ? themes.vsDark : themes.vsLight}
      >
        {({ getLineProps, getTokenProps, tokens }) => (
          <Text
            // A long line wraps, as `pre` does here, so a phone sees it all.
            className={classNames(
              'kicl-inline-size-full',
              'kicl-line-height-wide',
              className
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
    </Card>
  );
};

export { Code };
