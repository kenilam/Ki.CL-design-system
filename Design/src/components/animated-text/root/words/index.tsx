import React from 'react';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Partials
import { Piece } from './piece';

const Words: React.FunctionComponent = () => {
  const { split, text } = useAnimatedText();

  if (text === null) {
    return null;
  }

  const words = text.split(/(\s+)/);

  return (
    <>
      <span className='kicl-hidden'>{text}</span>
      {words.map((word, index) => {
        if (/^\s*$/.test(word)) {
          return word;
        }

        if (split === 'word') {
          return (
            <Piece key={index / 2} order={index / 2}>
              {word}
            </Piece>
          );
        }

        const start = words.slice(0, index).join('').length;

        return (
          <span className='kicl-text-nowrap' key={index}>
            {word.split('').map((letter, offset) => {
              return (
                <Piece key={start + offset} order={start + offset}>
                  {letter}
                </Piece>
              );
            })}
          </span>
        );
      })}
    </>
  );
};

export { Words };
