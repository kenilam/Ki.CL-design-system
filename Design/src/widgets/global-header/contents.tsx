import React from 'react';

// Libraries
import classNames from 'classnames';

// Widgets
import { SiteLogo, ThemeToggle } from '..';

// Components
import { Layout } from '../../components';

// Hooks
import { useResponsive } from '../../hooks';

// Context
import { useGlobalHeaderContext } from './context';

// Constants
import { CLASS_NAME } from './constants';

// Spec
import * as Spec from './spec';

const Contents: React.FunctionComponent<Spec.GlobalHeaderProps> = ({
  children,
  hidden,
}) => {
  const { node } = useGlobalHeaderContext();
  const { isMobile } = useResponsive();

  const className = classNames(
    'kicl-backdrop',
    'kicl-font-size-small',
    'kicl-inline-size-full',
    'kicl-inset-block-start-0',
    'kicl-padding-block',
    'kicl-position-sticky',
    // A sticky header would print over the top of every sheet.
    'kicl-print-hidden',
    'kicl-text-transform-uppercase',
    'kicl-z-index-header',
    CLASS_NAME
  );

  return (
    // The logo's column takes the room, and everything after it keeps to the end.
    <Layout
      alignItems='center'
      autoFlow='column'
      frames='auto--max-content--max-content'
      gap='normal'
      ref={node}
    >
      <header className={className} hidden={hidden}>
        <SiteLogo />
        {/* On mobile the menu button ends the row. */}
        {isMobile ? null : children}
        <ThemeToggle />
        {isMobile ? children : null}
      </header>
    </Layout>
  );
};

export { Contents };
