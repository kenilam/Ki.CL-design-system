import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, Text } from 'design/components';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--animated-text';

const AnimatedText = React.forwardRef<HTMLElement, Spec.Props>(
  (
    {
      delay = 0,
      duration = 'fastest',
      easing,
      property = 'slide-from-top',
      children,
      split = 'letter',
      stagger = 10,
      className,
      ...props
    },
    ref
  ) => {
    if (!['string', 'number'].includes(typeof children)) {
      return null;
    }

    const text = String(children);

    /*
     * Whitespace between words stays plain text, so the sentence wraps as it
     * would without the animation.
     */
    const pieces = split === 'word' ? text.split(/(\s+)/) : text.split('');

    return (
      /*
       * `is` arrives as the whole union, so TypeScript cannot pick the
       * matching branch of the polymorphic props through a spread. The
       * value is correct by construction; only the narrowing is lost.
       */
      <Text
        {...(props as React.ComponentProps<typeof Text>)}
        className={classNames(CLASS_NAME, className)}
        ref={ref}
      >
        {/* Read once as a word; the letters below are only for the eye. */}
        <span className='kicl-hidden'>{text}</span>
        {pieces.map((piece, index) => {
          const key = `${index}`;

          if (/^\s*$/.test(piece)) {
            return piece;
          }

          return (
            <Animation
              delay={delay + stagger * (split === 'word' ? index / 2 : index)}
              duration={duration}
              easing={easing}
              property={property}
              key={key}
            >
              <span aria-hidden className='kicl-display-inline-block'>
                {piece}
              </span>
            </Animation>
          );
        })}
      </Text>
    );
  }
);

AnimatedText.displayName = 'AnimatedText';

type AnimatedTextProps = Spec.Props;

export { AnimatedText, type AnimatedTextProps };
