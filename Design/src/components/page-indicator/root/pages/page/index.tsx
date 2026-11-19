import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  HyperLink,
  ListItem,
  Popover,
  PopoverHint,
  PopoverTrigger,
} from 'design/components';

// Spec
import type * as Spec from 'design/components/page-indicator/spec';

// Context
import { usePageIndicator } from 'design/components/page-indicator/context';

// Constants
import { CLASS_NAME } from 'design/components/page-indicator/constants';

// Styles
import './styles.scss';

type Props = Pick<Spec.Page, 'id'>;

const Page: React.FunctionComponent<Props> = ({ id }) => {
  const { current, pages } = usePageIndicator();
  const page = pages.find((item) => {
    return item.id === id;
  });

  if (!page) {
    return null;
  }

  return (
    <ListItem className={`${CLASS_NAME}__page`}>
      <Popover>
        <PopoverTrigger asChild>
          <HyperLink
            aria-current={current === id ? 'location' : undefined}
            className={classNames(
              'kicl-padding-narrower',
              'kicl-pointer-events-auto'
            )}
            lookLikeButton
            size='small'
            to={{ hash: id }}
            variant='ghost'
          >
            <span className='kicl-hidden'>{page.label}</span>
          </HyperLink>
        </PopoverTrigger>
        <PopoverHint
          aria-hidden
          className='kicl-padding-narrow'
          offset='normal'
          placement='inline-start-center'
        >
          {page.label}
        </PopoverHint>
      </Popover>
    </ListItem>
  );
};

export { Page };
