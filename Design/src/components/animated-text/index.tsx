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

    const words = text.split(/(\s+)/);

    const renderPiece = (piece: string, order: number) => (
      <Animation
        delay={delay + stagger * order}
        duration={duration}
        easing={easing}
        property={property}
        key={order}
      >
        <span aria-hidden className='kicl-display-inline-block'>
          {piece}
        </span>
      </Animation>
    );

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
        {words.map((word, index) => {
          if (/^\s*$/.test(word)) {
            return word;
          }

          if (split === 'word') {
            return renderPiece(word, index / 2);
          }

          const start = words.slice(0, index).join('').length;

          return (
            <span className='kicl-text-nowrap' key={index}>
              {word
                .split('')
                .map((letter, offset) => renderPiece(letter, start + offset))}
            </span>
          );
        })}
      </Text>
    );
  }
);

AnimatedText.displayName = 'AnimatedText';

type AnimatedTextProps = Spec.Props;

export { AnimatedText, type AnimatedTextProps };
