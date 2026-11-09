import React from 'react';

// Icons
import * as Bs from 'react-icons/bs';

// Routes
import { useLocation, useNavigate } from 'design/router';

// Components
import { HyperLink, HyperLinkProps } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

const GoBack: React.FunctionComponent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const t = useCopy();

  const url = document.referrer ? new URL(document.referrer) : undefined;
  const isSameOrigin = url?.origin === window.location.origin;

  const referrer = isSameOrigin && url?.pathname === pathname ? undefined : url;

  const onClick: HyperLinkProps['onClick'] = (event) => {
    if (!referrer || isSameOrigin) {
      return;
    }

    event.preventDefault();

    navigate(-1);
  };

  const to: HyperLinkProps['to'] =
    referrer && isSameOrigin
      ? {
          pathname: referrer.pathname,
          search: referrer.search,
          hash: referrer.hash,
        }
      : '..';

  return (
    <HyperLink
      before={<Bs.BsChevronLeft aria-hidden className='kicl-rtl-mirror' />}
      level='confirm'
      lookLikeButton
      onClick={onClick}
      to={to}
      size='small'
      variant='secondary'
    >
      {t('action_go_back')}
    </HyperLink>
  );
};

export { GoBack };
