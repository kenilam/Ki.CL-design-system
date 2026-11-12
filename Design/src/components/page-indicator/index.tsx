import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Card, List } from 'design/components';

// Partials
import { Page } from './page';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

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
            return <Page id={id} key={id} label={label} />;
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
