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
import * as Spec from 'design/components/page-indicator/spec';

// Constants
import { CLASS_NAME } from 'design/components/page-indicator/constants';

// Styles
import './styles.scss';

const Page: React.FunctionComponent<Spec.Page> = ({ id, label }) => {
  return (
    <ListItem className={`${CLASS_NAME}__page`}>
      <Popover>
        <PopoverTrigger asChild>
          <HyperLink
            /*
             * The hint repeats the link's hidden text, so it isn't
             * read twice.
             */
            aria-describedby={undefined}
            className={classNames(
              'kicl-padding-narrower',
              'kicl-pointer-events-auto'
            )}
            lookLikeButton
            size='small'
            to={`#${id}`}
            variant='ghost'
          >
            <span className='kicl-hidden'>{label}</span>
          </HyperLink>
        </PopoverTrigger>
        <PopoverHint
          aria-hidden
          className='kicl-padding-narrow'
          offset='normal'
          placement='inline-start-center'
        >
          {label}
        </PopoverHint>
      </Popover>
    </ListItem>
  );
};

export { Page };
