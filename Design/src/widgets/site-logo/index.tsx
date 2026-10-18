import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { HyperLink, Layout } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import { Logo } from 'design/icons';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--widgets--site-logo';

const SiteLogo: React.FunctionComponent<Spec.Props> = ({
  className: _className,
}) => {
  const t = useCopy();

  // The size of an `h2`, without being one.
  const className = classNames(
    CLASS_NAME,
    'kicl-look-like-h2',
    'kicl-line-height-narrower',
    _className
  );

  return (
    <Layout alignItems='center' justifyContent='center'>
      <HyperLink
        aria-label={t('label_home')}
        className={className}
        to='/'
        unstyled
      >
        <Logo />
      </HyperLink>
    </Layout>
  );
};

type SiteLogoProps = Spec.Props;

export { SiteLogo, type SiteLogoProps };
