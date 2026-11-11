import React from 'react';

// Components
import { Heading, List, ListItem } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Pages
import { PAGES, type Category as CategoryName } from 'design/pattern-pages';

// Partials
import { Page } from './page';

type Props = { category: CategoryName };

const Category: React.FunctionComponent<Props> = ({ category }) => {
  const t = useCopy();
  const pages = Object.keys(PAGES[category]);

  if (!pages.length) {
    return null;
  }

  return (
    <ListItem gap='narrower'>
      <Heading is='h5'>{t(`category_${category}`)}</Heading>
      <List gap='narrower'>
        {pages.map((pattern) => {
          return <Page category={category} key={pattern} pattern={pattern} />;
        })}
      </List>
    </ListItem>
  );
};

export { Category };
