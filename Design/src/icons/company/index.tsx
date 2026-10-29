import React from 'react';

// Libraries
import classNames from 'classnames';
import { ReactSVG } from 'react-svg';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Vectors
import { monochrome, polychrome } from './vectors';

// Styles
import './styles.scss';

type Name =
  | (typeof monochrome.Names)[keyof typeof monochrome.Names]
  | (typeof polychrome.Names)[keyof typeof polychrome.Names];

/** Only what both an `img` and the SVG wrapper take. It's `1em`, so a `kicl-font-size-*` class sizes it. */
type Props = Pick<
  React.HTMLAttributes<HTMLElement>,
  'className' | 'id' | 'title'
> &
  Pick<React.ImgHTMLAttributes<HTMLImageElement>, 'alt'> & {
    src?: Name;
  };

const CLASS_NAME = 'kicl--icons--company';

const CompanyNames = {
  monochrome: monochrome.Names,
  polychrome: polychrome.Names,
};

const CompanyVectors = {
  monochrome: monochrome.Vectors,
  polychrome: polychrome.Vectors,
};

type Snake<Text extends string> = Text extends `${infer Head}${infer Tail}`
  ? `${Head extends Lowercase<Head> ? Head : `_${Lowercase<Head>}`}${Snake<Tail>}`
  : Text;

const toKey = <Source extends NonNullable<Name>>(name: Source) => {
  return `company_${name.replace(/[A-Z]/g, (letter) => {
    return `_${letter.toLowerCase()}`;
  })}` as `company_${Snake<Source>}`;
};

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
