import React from 'react';

// Libraries
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Props } from './spec';

// Constants
import { CLASS_NAME, CompanyNames, CompanyVectors } from './constants';

// Partials
import { toKey } from './to-key';

// Styles
import './styles.scss';

const Company: React.FunctionComponent<Props> = ({
  alt,
  className: _className,
  src: _src,
  ...props
}) => {
  const t = useCopy();

  const className = classNames(
    CLASS_NAME,
    'kicl-display-inline-block',
    'kicl-line-height-narrower',
    _className
  );

  if (!_src) {
    return null;
  }

  const monochrome = CompanyVectors.monochrome[_src];
  const polychrome = CompanyVectors.polychrome[_src];

  if (!monochrome && !polychrome) {
    return null;
  }

  const label = alt ?? t(toKey(_src));

  if (polychrome) {
    return (
      <img {...props} alt={label} className={className} src={polychrome} />
    );
  }

  return (
    <ReactSVG
      {...props}
      beforeInjection={(svg) => {
        svg.setAttribute('aria-label', label);
        svg.setAttribute('role', 'img');
      }}
      className={className}
      src={monochrome}
      wrapper='span'
    />
  );
};

export { CompanyNames, CompanyVectors, Company, type Props };
