import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button, Text } from 'design/components';

// Styles
import './styles.scss';

// Constants
import { BASE } from './constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Spec } from './spec';

// Partials
import { Drawing, type DiagramState } from './drawing';
import { Legend } from './legend';

type Props = Pick<React.ComponentProps<'figure'>, 'className' | 'ref'> & {
  /** Id of the dialog that shows this diagram full size. */
  opens?: string;
  spec: Spec;
  state?: DiagramState;
};

/**
 * Declarative SVG diagram (boxes, stores, queues and the arrows between
 * them), drawn with the design system's own tokens - surfaces, borders, brand accents, and the site typeface - so it
 * follows the theme instead of shipping as a static image.
 */
const Diagram: React.FunctionComponent<Props> = ({
  className,
  opens,
  ref,
  spec,
  state,
}) => {
  const t = useCopy();

  const drawing = <Drawing spec={spec} state={state} />;

  return (
    <figure
      className={classNames(
        BASE,
        'kicl-inline-size-full',
        'kicl-position-relative',
        className
      )}
      ref={ref}
    >
      {opens ? (
        <Button
          alignItems='center'
          aria-label={t('action_open_image', { title: spec.title })}
          className={classNames(
            'kicl-cursor-zoom-in',
            'kicl-inline-size-full',
            `${BASE}-preview`
          )}
          command='show-modal'
          commandFor={opens}
          justifyContent='stretch'
          unstyled
        >
          {drawing}
        </Button>
      ) : (
        drawing
      )}
      {spec.caption || spec.legend ? (
        <figcaption className='kicl-padding-block-start-narrow'>
          {spec.legend ? <Legend items={spec.legend} /> : null}
          {spec.caption ? (
            <Text
              className='kicl-font-size-small'
              dense
              is='span'
              variant='secondary'
            >
              {spec.caption}
            </Text>
          ) : null}
          {spec.description ? (
            <span className='kicl-hidden'> {spec.description}</span>
          ) : null}
        </figcaption>
      ) : spec.description ? (
        <figcaption className='kicl-hidden'>{spec.description}</figcaption>
      ) : null}
    </figure>
  );
};

export type { DiagramState };
export type {
  LegendItem as DiagramLegendItem,
  Spec as DiagramSpec,
} from './spec';
export { Diagram, Legend as DiagramLegend };
