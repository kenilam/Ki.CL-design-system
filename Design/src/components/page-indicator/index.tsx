import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import {
  Card,
  HyperLink,
  List,
  ListItem,
  Popover,
  PopoverHint,
  PopoverTrigger,
  Text,
} from '..';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--page-indicator';

const PageIndicator = React.forwardRef<HTMLElement, Spec.Props>(
  ({ className, pages, style, ...rest }, ref) => (
    <Card
      className={classNames(
        CLASS_NAME,
        'kicl-inset-block-center',
        'kicl-inset-inline-end-frame',
        'kicl-padding-narrow',
        'kicl-pointer-events-none',
        'kicl-position-fixed',
        'kicl-z-index-floating',
        className
      )}
      is='nav'
      ref={ref}
      size='fit'
      style={
        {
          '--kicl--components--page-indicator--count': pages.length,
          ...style,
        } as never
      }
      variant='ghost'
      {...rest}
    >
      <List is='ol'>
        {pages.map(({ id, label }) => (
          <ListItem key={id}>
            <Popover>
              <PopoverTrigger asChild>
                <HyperLink
                  /*
                   * The hint shows the words the link's hidden text already
                   * names it with, so it is for the eye only and not read twice.
                   */
                  aria-describedby={undefined}
                  /* The link is the dot: its padding is its size. */
                  className={classNames(
                    'kicl-padding-narrower',
                    'kicl-pointer-events-auto'
                  )}
                  lookLikeButton
                  size='small'
                  to={`#${id}`}
                  variant='ghost'
                >
                  <Text is='span' className='kicl-hidden'>
                    {label}
                  </Text>
                </HyperLink>
              </PopoverTrigger>
              <PopoverHint
                aria-hidden
                className={classNames('kicl-padding-narrow')}
                offset='normal'
                placement='inline-start-center'
              >
                {label}
              </PopoverHint>
            </Popover>
          </ListItem>
        ))}
      </List>
    </Card>
  )
);

PageIndicator.displayName = 'PageIndicator';

type PageIndicatorPage = Spec.Page;
type PageIndicatorProps = Spec.Props;

export { PageIndicator, type PageIndicatorPage, type PageIndicatorProps };
