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
} from 'design/components';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--page-indicator';

const PageIndicator = React.forwardRef<HTMLElement, Spec.Props>(
  ({ className, pages, style, ...rest }, ref) => {
    return (
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
        variant='secondary'
        {...rest}
      >
        <List is='ol'>
          {pages.map(({ id, label }) => {
            return (
              <ListItem key={id}>
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
          })}
        </List>
      </Card>
    );
  }
);

PageIndicator.displayName = 'PageIndicator';

type PageIndicatorPage = Spec.Page;
type PageIndicatorProps = Spec.Props;

export { PageIndicator, type PageIndicatorPage, type PageIndicatorProps };
