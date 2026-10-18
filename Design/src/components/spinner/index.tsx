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

/** How long the overlay's veil takes to fade. */
const BACKDROP_DURATION: AnimationProps['duration'] = 'fast';

/** `ms`, then as long as a duration token: the tokens are CSS, so the sum is too. */
const delayAfter = (ms: number, duration: AnimationProps['duration']) =>
  `calc(${ms}ms + var(--kicl-transition-duration-${duration}))`;

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

  /*
   * An overlay shows its veil first and the icon once the veil is in, and
   * leaves the other way round: the icon goes, then the veil. Inline there is
   * no veil, and the icon shows at once or short fetches never show it.
   */
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
      // Only an overlay has anything behind it to veil.
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
          {/* The entrance moves `scale` or `translate`, the spin `transform`, so both run on the icon. */}
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
