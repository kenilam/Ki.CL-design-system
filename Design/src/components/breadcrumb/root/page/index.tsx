import React from 'react';

// Libraries
import * as Tb from 'react-icons/tb';

// Components
import { HyperLink } from 'design/components';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

const Page: React.FunctionComponent = () => {
  const { crumbs, current, fitted, menu } = useBreadcrumb();
  const isFirst =
    menu.length === 0 &&
    !crumbs.slice(fitted).some(({ to }) => {
      return Boolean(to);
    });

  return (
    <>
      {isFirst ? null : (
        <Tb.TbChevronRight aria-hidden className='kicl-rtl-mirror' />
      )}
      <HyperLink className='kicl-text-nowrap' to=''>
        {current}
      </HyperLink>
    </>
  );
};

export { Page };
