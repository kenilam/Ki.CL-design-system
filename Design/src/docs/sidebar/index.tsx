import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { useParams } from 'react-router-dom';

// Components
import {
  Details,
  HyperLink,
  List,
  ListItem,
  Navigation,
  NavigationProps,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { PAGES, pagesIn } from 'design/docs/pages';

// Constants
import { CATEGORIES, type Category } from 'design/docs/constants';

/** Every page, grouped as on the home page. Only the open page's group starts open. */
const Sidebar: React.FunctionComponent<NavigationProps> = (
  {
    className,
    ...props
  }
) => {
  const t = useCopy();
  const path = useDocsPath();
  const { page: open } = useParams();

  const current = PAGES.find(({ slug }) => slug === open);

  return (
    <Navigation
      {...props}
      aria-label={t('docs_components')}
      className={
        classNames(
          'kicl-min-block-size-screen',
          'kicl-padding',
          className,
        )
      }
    >
      <List>
        <ListItem>
          <HyperLink to={path()}>{t('docs_overview')}</HyperLink>
        </ListItem>
        {(Object.keys(CATEGORIES) as Category[]).map((category) => {
          const pages = pagesIn(category);

          if (!pages.length) {
            return null;
          }

          return (
            <ListItem key={category}>
              <Details
                open={current?.category === category}
                summary={t(`category_${category}`)}
              >
                <List
                  className='kicl-padding-inline-start-narrow'
                  gap='narrow'
                >
                  {pages.map(({ context, slug }) => (
                    <ListItem key={slug}>
                      <HyperLink to={path(slug)}>
                        {t('component', { context })}
                      </HyperLink>
                    </ListItem>
                  ))}
                </List>
              </Details>
            </ListItem>
          );
        })}
      </List>
    </Navigation>
  );
};

export { Sidebar };
