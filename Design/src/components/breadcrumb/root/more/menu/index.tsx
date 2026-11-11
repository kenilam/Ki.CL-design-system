import React from 'react';

// Components
import { List } from 'design/components/list';

// Spec
import type * as Spec from 'design/components/breadcrumb/spec';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// Partials
import { Item } from './item';

type Props = Pick<Spec.Page, 'to'>;

const Menu: React.FunctionComponent<Props> = ({ to }) => {
  const { menu } = useBreadcrumb();
  const crumb = menu.find((item) => {
    return item.to === to;
  });

  if (!crumb) {
    return null;
  }

  return (
    <List
      className={menu[0] === crumb ? undefined : 'kicl-padding-inline-narrow'}
      gap='narrower'
      is='ol'
    >
      {(crumb.siblings ?? [crumb]).map((page) => {
        return <Item key={page.to} to={page.to} />;
      })}
    </List>
  );
};

export { Menu };
