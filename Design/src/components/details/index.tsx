import React, { useId, useRef } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Spec
import type { Props } from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Partials
import { group } from './group';
import { Marker } from './marker';
import { reveal } from './reveal';

const Details = React.forwardRef<HTMLDetailsElement, Props>(
  (
    { children, className, gap, marker = true, onToggle, summary, ...rest },
    ref
  ) => {
    const clicked = useRef(false);
    const name = useId();

    return (
      <details
        {...rest}
        className={classNames(
          CLASS_NAME,
          { [`${CLASS_NAME}--gap--${gap}`]: gap },
          className
        )}
        onToggle={(event) => {
          onToggle?.(event);

          if (clicked.current && event.currentTarget.open) {
            group(event.currentTarget, name);
            reveal(event.currentTarget);
          }

          clicked.current = false;
        }}
        ref={ref}
      >
        <Layout
          alignItems='start'
          autoFlow='column'
          frames='1fr--max-content'
          gap='narrow'
        >
          <summary
            className={`${CLASS_NAME}__summary`}
            onClick={() => {
              clicked.current = true;
            }}
          >
            {summary}
            {marker ? <Marker /> : null}
          </summary>
        </Layout>
        {children}
      </details>
    );
  }
);

Details.displayName = 'Details';

export type { Props as DetailsProps } from './spec';
export { Details, Marker as DetailsMarker };
