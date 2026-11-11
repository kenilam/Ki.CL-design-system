import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Helpers
import { mergeRefs } from 'design/helper';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// Partials
import { Crumbs } from './crumbs';
import { More } from './more';
import { Page } from './page';
import { useFold } from './use-fold';

const CLASS_NAME = 'kicl--components--breadcrumb';

type Props = Omit<React.ComponentProps<'nav'>, 'children'>;

const Root: React.FunctionComponent<Props> = ({ className, ref, ...rest }) => {
  const t = useCopy();
  const { node } = useBreadcrumb();

  useFold();

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      gap='narrower'
      justifyContent='start'
    >
      <nav
        aria-label={t('label_breadcrumb')}
        className={classNames(CLASS_NAME, 'kicl-overflow-hidden', className)}
        ref={mergeRefs(ref, node)}
        {...rest}
      >
        <More />
        <Crumbs />
        <Page />
      </nav>
    </Layout>
  );
};

export { Root };
