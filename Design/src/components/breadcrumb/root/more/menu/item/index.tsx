import React from 'react';

// Libraries
import classNames from 'classnames';

// Icons
import * as Tb from 'react-icons/tb';

// Components
import { HyperLink, ListItem, Text } from 'design/components';

// Spec
import type * as Spec from 'design/components/breadcrumb/spec';

// Context
import { useBreadcrumb } from 'design/components/breadcrumb/context';

// Partials
import { Menu } from 'design/components/breadcrumb/root/more/menu';

type Props = Pick<Spec.Page, 'to'>;

const Item: React.FunctionComponent<Props> = ({ to }) => {
  const { menu } = useBreadcrumb();
  const crumb = menu.find((item) => {
    return (item.siblings ?? [item]).some((page) => {
      return page.to === to;
    });
  });
  const page = (crumb?.siblings ?? [crumb]).find((item) => {
    return item?.to === to;
  });

  if (!crumb || !page) {
    return null;
  }

  const next = menu[menu.indexOf(crumb) + 1];
  const isOnTrail = to === crumb.to;

  let Icon = Tb.TbChevronRight;

  if (next) {
    Icon = Tb.TbChevronDown;
  }

  return (
    <ListItem gap='narrower'>
      <HyperLink
        before={
          <Text
            className={classNames('kicl-font-size-smallest', {
              'kicl-visibility-hidden': !isOnTrail,
            })}
            is='span'
          >
            <Icon className='kicl-rtl-mirror' />
          </Text>
        }
        to={to}
      >
        {page.name}
      </HyperLink>
      {isOnTrail && next ? <Menu to={next.to} /> : null}
    </ListItem>
  );
};

export { Item };
