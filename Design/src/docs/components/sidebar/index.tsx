import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { List, Navigation, NavigationProps } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Pages
import { PAGES, type Category as CategoryName } from 'design/component-pages';

// Partials
import { Category } from './category';
import { Overview } from './overview';

const Sidebar: React.FunctionComponent<NavigationProps> = ({
  className,
  ...props
}) => {
  const t = useCopy();

  return (
    <Navigation
      {...props}
      aria-label={t('docs_components')}
      className={classNames('kicl-padding', className)}
    >
      <List>
        <Overview />
        {(Object.keys(PAGES) as CategoryName[]).map((category) => {
          return <Category category={category} key={category} />;
        })}
      </List>
    </Navigation>
  );
};

export { Sidebar };
