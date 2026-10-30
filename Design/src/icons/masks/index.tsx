import React, { useState } from 'react';

// Icons
import * as Ri from 'react-icons/ri';

const ICONS = {
  'check-line': Ri.RiCheckLine,
  'subtract-line': Ri.RiSubtractLine,
  'error-warning-line': Ri.RiErrorWarningLine,
  'loader-4-line': Ri.RiLoader4Line,
};

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
        {Object.entries(ICONS).map(([name, Icon]) => {
          return <Icon key={name} />;
        })}
      </div>
      <style>{`:root {${properties.join('')}}`}</style>
    </>
  );
};

export { Masks };
