import React from 'react';

// Libraries
import * as Tb from 'react-icons/tb';

// Components
import { HyperLink } from 'design/components';

// Spec
import type * as Spec from 'design/components/breadcrumb/spec';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

type Props = Pick<Spec.Crumb, 'name'>;

const Crumb: React.FunctionComponent<Props> = ({ name }) => {
  const { crumbs, fitted, menu } = useBreadcrumb();
  const shown = crumbs.slice(fitted).filter(({ to }) => {
    return Boolean(to);
  });
  const crumb = shown.find((item) => {
    return item.name === name;
  });

  if (!crumb?.to) {
    return null;
  }

  return (
    <>
      {menu.length > 0 || shown[0] !== crumb ? (
        <Tb.TbChevronRight aria-hidden className='kicl-rtl-mirror' />
      ) : null}
      <HyperLink className='kicl-text-nowrap' to={crumb.to}>
        {name}
      </HyperLink>
    </>
  );
};

export { Crumb };
