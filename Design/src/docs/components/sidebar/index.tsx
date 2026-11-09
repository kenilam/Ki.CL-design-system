import React from 'react';

// Libraries
import classNames from 'classnames';

// Routes
import { useParams } from 'design/router';

// Components
import {
  Heading,
  HyperLink,
  List,
  ListItem,
  Navigation,
  NavigationProps,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsContext } from 'design/mdx/context';

// Pages
import { PAGES, type Category } from 'design/component-pages';

// Constants
import { COMPONENTS_PATH as PATH } from 'design/docs/paths';

const Sidebar: React.FunctionComponent<NavigationProps> = ({
  className,
  ...props
}) => {
  const t = useCopy();
  const { parsePath } = useDocsContext();
  const params = useParams();

  return (
    <Navigation
      {...props}
      aria-label={t('docs_components')}
      className={classNames('kicl-padding', className)}
    >
      <List>
        <ListItem>
          <HyperLink to={parsePath(PATH)}>{t('docs_overview')}</HyperLink>
        </ListItem>
        {(Object.keys(PAGES) as Category[]).map((category) => {
          const group = PAGES[category];
          const pages = Object.entries(group);

          if (!pages.length) {
            return null;
          }

          return (
            <ListItem key={category} gap='narrower'>
              <Heading is='h5'>{t(`category_${category}`)}</Heading>
              <List gap='narrower'>
                {pages.map(([component, { context }]) => {
                  return (
                    <ListItem key={component}>
                      <HyperLink
                        block
                        className='kicl-inline-size-full'
                        lookLikeButton
                        to={parsePath(`${PATH}/${category}/${component}`)}
                        variant={
                          category === params.category &&
                          component === params.component
                            ? 'secondary'
                            : 'tertiary'
                        }
                      >
                        {t('component', { context })}
                      </HyperLink>
                    </ListItem>
                  );
                })}
              </List>
            </ListItem>
          );
        })}
      </List>
    </Navigation>
  );
};

export { Sidebar };
