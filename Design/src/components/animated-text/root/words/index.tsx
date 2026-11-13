import React from 'react';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Partials
import { Piece } from './piece';
import { SPACE, toChunks } from './chunks';

const Words: React.FunctionComponent = () => {
  const { split, text } = useAnimatedText();

  if (text === null) {
    return null;
  }

  const chunks = toChunks(text);

  return (
    <>
      <span className='kicl-hidden'>{text}</span>
      {chunks.map((chunk, index) => {
        if (SPACE.test(chunk)) {
          return chunk;
        }

        const before = chunks.slice(0, index);
        const start = before.join('').length;
        const joined = index > 0 && !SPACE.test(chunks[index - 1]);

        if (split === 'word') {
          const order = before.filter((each) => {
            return !SPACE.test(each);
          }).length;

          return (
            <React.Fragment key={start}>
              {joined ? <wbr /> : null}
              <Piece order={order}>{chunk}</Piece>
            </React.Fragment>
          );
        }

        return (
          <React.Fragment key={start}>
            {joined ? <wbr /> : null}
            <span className='kicl-text-nowrap'>
              {chunk.split('').map((letter, offset) => {
                return (
                  <Piece key={start + offset} order={start + offset}>
                    {letter}
                  </Piece>
                );
              })}
            </span>
          </React.Fragment>
        );
      })}
    </>
  );
};

export { Words };
