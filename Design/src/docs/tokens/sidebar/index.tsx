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
import { useDocsContext } from 'design/docs/context';

// Pages
import { PAGES, type Category } from 'design/docs/tokens/pages';

// Constants
import { PATH } from 'design/docs/tokens/constants';

/** Every page, grouped as on the home page. Only the open page's group starts open. */
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
      aria-label={t('docs_tokens')}
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
                {pages.map(([token, { context }]) => (
                  <ListItem key={token}>
                    <HyperLink
                      className='kicl-inline-size-full'
                      lookLikeButton
                      to={parsePath(`${PATH}/${category}/${token}`)}
                      variant={
                        category === params.category && token === params.token
                          ? 'secondary'
                          : 'tertiary'
                      }
                    >
                      {t('token', { context })}
                    </HyperLink>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          );
        })}
      </List>
    </Navigation>
  );
};

export { Sidebar };
