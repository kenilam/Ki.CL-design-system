import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

type Props = {
  name: string;
};

const Specimen: React.FunctionComponent<Props> = ({ name }) => {
  const t = useCopy();

  return (
    <Text
      aria-hidden
      className={classNames('kicl-overflow-hidden', `kicl-${name}`)}
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      }}
    >
      {t('docs_specimen')}
    </Text>
  );
};

export { Specimen };
