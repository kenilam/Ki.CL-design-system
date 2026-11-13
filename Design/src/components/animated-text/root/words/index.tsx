import React from 'react';

// Context
import { useAnimatedText } from 'design/components/animated-text/context';

// Partials
import { Piece } from './piece';
import { SPACE, toParts } from './chunks';

const Words: React.FunctionComponent = () => {
  const { replaced, split, text } = useAnimatedText();

  if (text === null) {
    return null;
  }

  const parts = toParts(text);

  const plain = parts.map(({ chunks, start, strong }) => {
    const value = chunks.join('');

    return strong ? (
      <strong key={start}>{value}</strong>
    ) : (
      <React.Fragment key={start}>{value}</React.Fragment>
    );
  });

  if (replaced) {
    return plain;
  }

  return (
    <>
      <span className='kicl-hidden'>{plain}</span>
      {parts.map(({ chunks, order, start, strong }) => {
        const pieces = chunks.map((chunk, index) => {
          if (SPACE.test(chunk)) {
            return chunk;
          }

          const before = chunks.slice(0, index);
          const offset = start + before.join('').length;
          const joined = index > 0 && !SPACE.test(chunks[index - 1]);

          if (split === 'word') {
            const at =
              order +
              before.filter((each) => {
                return !SPACE.test(each);
              }).length;

            return (
              <React.Fragment key={offset}>
                {joined ? <wbr /> : null}
                <Piece order={at}>{chunk}</Piece>
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={offset}>
              {joined ? <wbr /> : null}
              <span className='kicl-text-nowrap'>
                {chunk.split('').map((letter, place) => {
                  return (
                    <Piece key={offset + place} order={offset + place}>
                      {letter}
                    </Piece>
                  );
                })}
              </span>
            </React.Fragment>
          );
        });

        return strong ? (
          <strong key={start}>{pieces}</strong>
        ) : (
          <React.Fragment key={start}>{pieces}</React.Fragment>
        );
      })}
    </>
  );
};

export { Words };
