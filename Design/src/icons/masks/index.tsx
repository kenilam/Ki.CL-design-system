import React, { useState } from 'react';

// Icons
import * as Bs from 'react-icons/bs';

const ICONS = {
  'check-line': Bs.BsCheckLg,
  'subtract-line': Bs.BsDashLg,
  'error-warning-line': Bs.BsExclamationCircle,
  'loader-4-line': Bs.BsArrowClockwise,
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
