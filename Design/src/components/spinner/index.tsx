import React from 'react';
import ReactDOM from 'react-dom';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, AnimationProps, Layout, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Styles
import './styles.scss';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--spinner';

const BACKDROP_DURATION: AnimationProps['duration'] = 'fast';

const delayAfter = (ms: number, duration: AnimationProps['duration']) => {
  return `calc(${ms}ms + var(--kicl-transition-duration-${duration}))`;
};

const Spinner: React.FunctionComponent<Spec.Props> = ({
  delay = 0,
  duration = 'fast',
  property = 'zoom-out',
  atRoot,
  className: _className,
  backdrop = true,
  in: transitionIn,
  label,
  position = 'overlay',
  size,
  ...rest
}) => {
  const t = useCopy();

  const isOverlay = position === 'overlay';
  const entering = transitionIn ?? true;

  const backdropDelay =
    isOverlay && !entering ? delayAfter(delay, duration) : delay;
  const iconDelay =
    isOverlay && entering ? delayAfter(delay, BACKDROP_DURATION) : delay;

  const className = classNames(
    CLASS_NAME,
    {
      'kicl-inset-0': isOverlay,
      'kicl-position-absolute': isOverlay,
      'kicl-z-index-overlay': isOverlay,
      'kicl-backdrop': isOverlay && backdrop,
      [`${CLASS_NAME}--overlay`]: isOverlay,
      [`${CLASS_NAME}--size--${size}`]: size,
    },
    _className
  );

  const Contents = (
    <Animation
      {...rest}
      delay={backdropDelay}
      duration={BACKDROP_DURATION}
      in={entering}
    >
      <Layout
        display={isOverlay ? 'grid' : 'inline-grid'}
        alignContent='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
      >
        <Text
          className={classNames('kicl-line-height-dense', className)}
          is='span'
          role='status'
          unstyled
        >
          <span className='kicl-hidden'>{label ?? t('status_loading')}</span>
          {/* The entrance animates `scale` or `translate` and the spin `transform`, so they don't clash. */}
          <Animation
            {...rest}
            delay={iconDelay}
            duration={duration}
            property={property}
            in={entering}
          >
            <Ri.RiLoader4Line aria-hidden className='is-revolving' />
          </Animation>
        </Text>
      </Layout>
    </Animation>
  );

  if (!atRoot) {
    return Contents;
  }

  const Root = document.querySelector('body');

  if (!Root) {
    return Contents;
  }

  return <>{ReactDOM.createPortal(Contents, Root)}</>;
};

type SpinnerProps = Spec.Props;

export { Spinner, type SpinnerProps };
