import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { FRAME } from 'design/docs/tokens/previews/constants';
import { APEX, NADIR } from './constants';

// Partials
import { Apex } from './apex';
import { Deck } from './deck';
import { Nadir } from './nadir';

type Props = {
  name: string;
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
      {name === APEX ? <Apex /> : null}
      <Deck name={name} />
      {name === NADIR ? <Nadir /> : null}
    </div>
  );
};

export { Stack };
