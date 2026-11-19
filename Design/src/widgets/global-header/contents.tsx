import React from 'react';

// Libraries
import classNames from 'classnames';

// Widgets
import { SiteLogo, ThemeToggle } from 'design/widgets';

// Components
import { Layout } from 'design/components';

// Hooks
import { useResponsive } from 'design/hooks';

// Context
import { useGlobalHeaderContext } from './context';

// Constants
import { CLASS_NAME } from './constants';

// Spec
import * as Spec from './spec';

const Contents: React.FunctionComponent<Spec.GlobalHeaderProps> = ({
  after,
  before,
  children,
}) => {
  const { node } = useGlobalHeaderContext();
  const { isNarrow } = useResponsive();

  const className = classNames(
    'kicl-background-color-body',
    'kicl-font-size-small',
    'kicl-inline-size-full',
    'kicl-inset-block-start-0',
    'kicl-padding-block',
    'kicl-position-sticky',
    'kicl-print-hidden',
    'kicl-text-transform-uppercase',
    'kicl-z-index-global',
    CLASS_NAME
  );

  const themeToggle = <ThemeToggle block size='small' variant='tertiary' />;

  return (
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='1fr--max-content'
      gap='normal'
      ref={node}
    >
      <header className={className}>
        <SiteLogo />
        {isNarrow ? null : children}
        {before}
        {isNarrow ? themeToggle : null}
        {after}
        {isNarrow ? null : themeToggle}
        {isNarrow ? children : null}
      </header>
    </Layout>
  );
};

export { Contents };
