import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { HomeLinkProps } from './spec';

// Partials
import { HyperLink } from './index';

const HomeLink = React.forwardRef<HTMLAnchorElement, HomeLinkProps>(
  (
    {
      icon = <Ri.RiHomeLine aria-hidden />,
      label,
      showLabel,
      variant = 'secondary',
      ...rest
    },
    ref
  ) => {
    const t = useCopy();
    const name = label ?? t('action_home');

    return showLabel ? (
      <HyperLink
        {...rest}
        before={icon}
        lookLikeButton
        ref={ref}
        variant={variant}
      >
        {name}
      </HyperLink>
    ) : (
      <HyperLink
        {...rest}
        aria-label={name}
        lookLikeButton
        ref={ref}
        variant={variant}
      >
        {icon}
      </HyperLink>
    );
  }
);

HomeLink.displayName = 'HomeLink';

export { HomeLink };
