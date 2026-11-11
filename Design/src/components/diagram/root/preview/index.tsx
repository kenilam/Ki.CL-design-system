import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Constants
import { BASE } from 'design/components/diagram/constants';

// Context
import { useDiagram } from 'design/components/diagram/context';

// Partials
import { Drawing } from './drawing';

const Preview: React.FunctionComponent = () => {
  const t = useCopy();
  const { opens, spec } = useDiagram();

  if (!opens) {
    return <Drawing />;
  }

  return (
    <Button
      alignItems='center'
      aria-label={t('action_open_image', { title: spec.title })}
      className={classNames(
        'kicl-cursor-zoom-in',
        'kicl-inline-size-full',
        `${BASE}-preview`
      )}
      command='show-modal'
      commandfor={opens}
      justifyContent='stretch'
      unstyled
    >
      <Drawing />
    </Button>
  );
};

export { Preview };
