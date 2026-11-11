import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Heading as Specimen, ListItem, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Constants
import { LEVELS } from 'design/docs/tokens/docs/typography/headings/constants';

type Props = { level: (typeof LEVELS)[number][0] };

const Heading: React.FunctionComponent<Props> = ({ level }) => {
  const t = useCopy();
  const [, size] =
    LEVELS.find(([name]) => {
      return name === level;
    }) ?? [];

  return (
    <ListItem fill={12} gap='narrowest' justifyItems='start'>
      <Text is='code'>{`<${level}>`}</Text>
      <Text
        className={classNames('kicl-font-family-mono', 'kicl-font-size-small')}
        is='span'
      >
        {`--kicl-heading-font-size: var(--kicl-${size})`}
      </Text>
      <Specimen aria-hidden is={level}>
        {t('docs_specimen')}
      </Specimen>
    </ListItem>
  );
};

export { Heading };
