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
  /** The folded crumbs that link somewhere, from the top. */
  crumbs: readonly (Spec.Crumb & Spec.Page)[];
};

/**
 * The folded crumbs, one level to a list. A level lists the crumb's siblings
 * too, when it has them. The trail goes on in a list inside the crumb it
 * passes through, a step further in, so the nesting shows the hierarchy to
 * the eye and to a screen reader.
 */
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
                  <Icon />
                </Text>
              }
              to={to}
            >
              {name}
            </HyperLink>
            {isOnTrail && hasChildren && (
              <Menu className='kicl-padding-inline-narrow' crumbs={rest} />
            )}
          </ListItem>
        );
      })}
    </List>
  );
};

export { Menu };
