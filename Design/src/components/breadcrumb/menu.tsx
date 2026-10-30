import React from 'react';

// Icons
import * as Ri from 'react-icons/ri';

// Components
import { HyperLink } from 'design/components/hyper-link';
import { List, type ListProps } from 'design/components/list';
import { ListItem } from 'design/components/list-item';
import { Text } from 'design/components/text';

// Spec
import type * as Spec from './spec';
import classNames from 'classnames';

type MenuProps = Pick<ListProps, 'className'> & {
  crumbs: readonly (Spec.Crumb & Spec.Page)[];
};

const Menu: React.FunctionComponent<MenuProps> = ({ className, crumbs }) => {
  const [crumb, ...rest] = crumbs;

  if (!crumb) {
    return null;
  }

  const hasChildren = rest.length > 0;

  let Icon = Ri.RiArrowRightSLine;

  if (hasChildren) {
    Icon = Ri.RiArrowDownSLine;
  }

  return (
    <List className={className} gap='narrower' is='ol'>
      {(crumb.siblings ?? [crumb]).map(({ name, to }) => {
        const isOnTrail = to === crumb.to;

        return (
          <ListItem gap='narrower' key={to}>
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
              {name}
            </HyperLink>
            {isOnTrail && hasChildren ? (
              <Menu className='kicl-padding-inline-narrow' crumbs={rest} />
            ) : null}
          </ListItem>
        );
      })}
    </List>
  );
};

export { Menu };
