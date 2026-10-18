import React from 'react';

// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  HyperLink,
  List,
  ListItem,
} from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Paths
import { useDocsPath } from 'design/docs/base';

// Pages
import { pagesIn } from 'design/docs/pages';

// Constants
import { CATEGORIES, type Category } from 'design/docs/constants';

/** A card for each group with a button for each of its components, two to a row. */
const Explore: React.FunctionComponent = () => {
  const t = useCopy();
  const path = useDocsPath();

  return (
    <List columns>
      {(Object.keys(CATEGORIES) as Category[]).map((category) => {
        const pages = pagesIn(category);

        if (!pages.length) {
          return null;
        }

        return (
          <ListItem key={category} span={6}>
            <Card is='section'>
              <CardHeader>
                <CardTitle is='h2'>{t(`category_${category}`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <List fill={1} gap='narrow' justifyItems='start'>
                  {pages.map(({ context, slug }) => (
                    <ListItem key={slug}>
                      <HyperLink
                        lookLikeButton
                        size='small'
                        to={path(slug)}
                        variant='secondary'
                      >
                        {t('component', { context })}
                      </HyperLink>
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </ListItem>
        );
      })}
    </List>
  );
};

export { Explore };
