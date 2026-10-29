import React from 'react';

// Components
import { Heading, List, ListItem, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Hooks
import { useResponsive } from 'design/hooks';

const LEVELS = [
  ['h1', 'font-size-large'],
  ['h2', 'font-size-medium'],
  ['h3', 'font-size-moderate'],
  ['h4', 'font-size'],
  ['h5', 'font-size-small'],
  ['h6', 'font-size-small'],
] as const;

const Headings: React.FunctionComponent = () => {
  const { isMobile } = useResponsive();
  const t = useCopy();

  return (
    <List alignItems='start' fill={isMobile ? 12 : 6} gap='normal'>
      {LEVELS.map(([level, size]) => {
        return (
          <ListItem fill={12} gap='narrowest' justifyItems='start' key={level}>
            <Text is='code'>{`<${level}>`}</Text>
            <Text
              className='kicl-font-family-mono kicl-font-size-small'
              is='span'
            >
              {`--kicl-heading-font-size: var(--kicl-${size})`}
            </Text>
            <Heading aria-hidden is={level}>
              {t('docs_specimen')}
            </Heading>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Headings };
