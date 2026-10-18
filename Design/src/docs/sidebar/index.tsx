import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { useParams } from 'react-router-dom';

// Components
import { Details, HyperLink, List, ListItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { PAGES, pagesIn } from 'design/docs/pages';

// Constants
import { CATEGORIES, type Category } from 'design/docs/constants';

/**
 * Every page, grouped as on the home page. Only the open page's group starts
 * open, so on a phone the list above the page stays short.
 */
const Sidebar: React.FunctionComponent<React.ComponentProps<'nav'>> = ({
  className,
  ...rest
}) => {
  const t = useCopy();
  const path = useDocsPath();
  const { slug: open } = useParams();

  const current = PAGES.find(({ slug }) => slug === open);

  return (
    <nav
      {...rest}
      aria-label={t('docs_components')}
      className={classNames(
        'kicl-position-sticky',
        'kicl-inset-block-start-header',
        className
      )}
    >
      <List gap='narrow'>
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
                  gap='narrower'
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
    </nav>
  );
};

export { Sidebar };
