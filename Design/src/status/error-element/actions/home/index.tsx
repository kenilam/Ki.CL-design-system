import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { HyperLink } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const Home: React.FunctionComponent = () => {
  const t = useCopy();

  return (
    <HyperLink
      before={<Tb.TbHome aria-hidden />}
      lookLikeButton
      reloadDocument
      size='small'
      to='/'
      variant='secondary'
    >
      {t('action_home')}
    </HyperLink>
  );
};

export { Home };
