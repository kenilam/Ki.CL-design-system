import React from 'react';

// Icons
import * as Tb from 'react-icons/tb';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { MoreLinkProps } from './spec';

// Partials
import { HyperLink } from './index';

const MoreLink = React.forwardRef<HTMLAnchorElement, MoreLinkProps>(
  ({ label, to, ...rest }, ref) => {
    const t = useCopy();
    const name = label ?? t('action_read_more');

    return (
      <HyperLink
        {...rest}
        aria-label={name}
        lookLikeButton
        ref={ref}
        size='large'
        to={{ hash: to }}
        variant='secondary'
      >
        <Tb.TbChevronDown aria-hidden />
      </HyperLink>
    );
  }
);

MoreLink.displayName = 'MoreLink';

export { MoreLink };
