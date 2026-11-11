import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Routes
import { resolvePath, useLocation } from 'design/router';

// Components
import { HyperLink } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const GoBack: React.FunctionComponent = () => {
  const { pathname } = useLocation();
  const t = useCopy();

  return (
    <HyperLink
      before={<Tb.TbChevronLeft aria-hidden className='kicl-rtl-mirror' />}
      level='confirm'
      lookLikeButton
      size='small'
      to={resolvePath('..', pathname)}
      variant='secondary'
    >
      {t('action_go_back')}
    </HyperLink>
  );
};

export { GoBack };
