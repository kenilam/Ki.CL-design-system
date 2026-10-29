import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Styles
import './styles.scss';

type Props = {
  name: string;
};

const FRAME = classNames(
  'kicl-background-color-grey-700',
  'kicl-border-radius-xs',
  'kicl-contain-paint',
  'kicl-position-relative'
);

const BLOCK = classNames(
  'kicl-background-color-blue',
  'kicl-border-radius-xs',
  'kicl-padding-narrow'
);

const Placement: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-max'
      )}
      style={{ zoom: 0.5 }}
    >
      <span
        className={classNames(
          'kicl-background-color-blue',
          'kicl-border-radius-xs',
          'kicl-padding-wide',
          'kicl-position-absolute',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

const Position: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-max'
      )}
      style={{ zoom: 0.5 }}
    >
      <span
        className={classNames(
          BLOCK,
          'kicl-inset-block-start-narrow',
          'kicl-inset-inline-start-narrow',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

const Stack: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-max'
      )}
      style={{ zoom: 0.5 }}
    >
      <span
        className={classNames(
          'kicl-background-color-grey-200',
          'kicl-border-radius-xs',
          'kicl-inset-block-start-narrow',
          'kicl-inset-inline-start-narrow',
          'kicl-padding-wide',
          'kicl-position-absolute',
          'kicl-z-index-base'
        )}
      />
      <span
        className={classNames(
          BLOCK,
          'kicl-inset-block-start-wide',
          'kicl-inset-inline-start-wide',
          'kicl-padding-wide',
          'kicl-position-absolute',
          `kicl-${name}`
        )}
      />
    </div>
  );
};

const Display: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-inline-size-md',
        'kicl-padding-narrow',
        `kicl-${name}`
      )}
    >
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
      <span className={classNames(BLOCK, 'kicl-margin-narrowest')} />
    </div>
  );
};

const Overflow: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-grey-700',
        'kicl-border-radius-xs',
        'kicl-inline-size-sm',
        'kicl-max-block-size-columns-1',
        'kicl-padding-narrow',
        `kicl-${name}`
      )}
    >
      <span
        className={classNames(
          'kicl-aspect-ratio-square',
          'kicl-background-color-blue',
          'kicl-border-radius-xs',
          'kicl-display-block',
          'kicl-inline-size-sm'
        )}
      />
    </div>
  );
};

const Specimen: React.FunctionComponent<Props> = ({ name }) => {
  const t = useCopy();

  return (
    <Text
      aria-hidden
      className={classNames('kicl-overflow-hidden', `kicl-${name}`)}
      style={{
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
      }}
    >
      {t('docs_specimen')}
    </Text>
  );
};

const Length: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-blue',
        'kicl-border-radius-xs',
        'kicl-max-inline-size-columns-12',
        'kicl-padding-block-narrower'
      )}
      style={{ inlineSize: `var(--kicl-${name})` }}
    />
  );
};

const Shape: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl-background-color-blue',
        'kicl-border-radius-xs',
        'kicl-inline-size-sm',
        `kicl-${name}`
      )}
    />
  );
};

const Motion: React.FunctionComponent<{ style: React.CSSProperties }> = ({
  style,
}) => {
  return (
    <div
      aria-hidden
      className={classNames(
        'kicl--docs--motion',
        'kicl-background-color-grey-200',
        'kicl-border-radius-xs',
        'kicl-display-flex',
        'kicl-inline-size-columns-6',
        'kicl-padding-narrower'
      )}
    >
      <span
        className={classNames(
          BLOCK,
          'kicl--docs--motion__dot',
          'kicl-animation-none-reduced-motion'
        )}
        style={style}
      />
    </div>
  );
};

const Duration: React.FunctionComponent<Props> = ({ name }) => {
  return <Motion style={{ animationDuration: `var(--kicl-${name})` }} />;
};

const Instant: React.FunctionComponent = () => {
  return (
    <Motion
      style={{
        animationDirection: 'normal',
        animationDuration: 'var(--kicl-transition-duration-slowest)',
        animationTimingFunction: 'steps(2, jump-none)',
      }}
    />
  );
};

const Easing: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <Motion
      style={{
        animationDuration: 'var(--kicl-transition-duration-slowest)',
        animationTimingFunction: `var(--kicl-${name})`,
      }}
    />
  );
};

const Opacity: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <span
      aria-hidden
      className={classNames(
        BLOCK,
        'kicl-display-inline-block',
        'kicl-padding-wide'
      )}
      style={{ opacity: `var(--kicl-${name})` }}
    />
  );
};

const Backdrop: React.FunctionComponent<Props> = ({ name }) => {
  return (
    <div
      aria-hidden
      className={classNames(
        FRAME,
        'kicl-aspect-ratio-video',
        'kicl-inline-size-md'
      )}
      style={{ backgroundImage: 'var(--kicl-gradient-shift)' }}
    >
      <span
        className={classNames(
          'kicl-border-radius-xs',
          'kicl-inset-narrow',
          'kicl-position-absolute'
        )}
        style={{ backdropFilter: `var(--kicl-${name})` }}
      />
    </div>
  );
};

export {
  Backdrop,
  Display,
  Duration,
  Easing,
  Instant,
  Length,
  Opacity,
  Overflow,
  Placement,
  Position,
  Shape,
  Specimen,
  Stack,
};
