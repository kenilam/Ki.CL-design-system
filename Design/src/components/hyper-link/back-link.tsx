import React from 'react';

// Icons
import * as Bs from 'react-icons/bs';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { BackLinkProps } from './spec';

// Partials
import { HyperLink } from './index';

const BackLink = React.forwardRef<HTMLAnchorElement, BackLinkProps>(
  ({ label, relative = 'path', to = '..', ...rest }, ref) => {
    const t = useCopy();

    return (
      <HyperLink
        {...rest}
        before={<Bs.BsChevronLeft aria-hidden className='kicl-rtl-mirror' />}
        ref={ref}
        relative={relative}
        to={to}
      >
        {label ?? t('action_go_back')}
      </HyperLink>
    );
  }
);

BackLink.displayName = 'BackLink';

export { BackLink };
