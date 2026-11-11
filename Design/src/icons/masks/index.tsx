import React, { useState } from 'react';

// Partials
import { Mask } from './mask';

// Constants
import { ICONS } from './constants';

const Masks: React.FunctionComponent = () => {
  const [icons, setIcons] = useState<HTMLDivElement | null>(null);

  const properties = icons
    ? Object.keys(ICONS).map((name, index) => {
        const svg = encodeURIComponent(icons.children[index].outerHTML);

        return `--kicl-icon-${name}: url("data:image/svg+xml,${svg}");`;
      })
    : [];

  return (
    <>
      <div hidden ref={setIcons}>
        {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((name) => {
          return <Mask id={name} key={name} />;
        })}
      </div>
      <style>{`:root {${properties.join('')}}`}</style>
    </>
  );
};

export { Masks };
