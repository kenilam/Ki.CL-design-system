import React from 'react';

// Libraries
import classNames from 'classnames';

// Constants
import { BASE, TINT } from 'design/docs/tokens/previews/stack/constants';

type Props = {
  inset: string;
  layer: string;
  name: string;
};

const Plate: React.FunctionComponent<Props> = ({ inset, layer, name }) => {
  const isActive = layer === name;
  const isFloor = layer === BASE;

  return (
    <span
      className={classNames(
        'kicl-border-radius-xs',
        'kicl-box-shadow-overlay',
        'kicl-margin-narrow',
        'kicl-position-absolute',
        `kicl-${layer}`,
        {
          'kicl-backdrop-blur': isActive,
          'kicl-background-color-grey-200': !isActive && !isFloor,
          'kicl-background-color-grey-900': !isActive && isFloor,
        }
      )}
      style={{
        backgroundColor: isActive ? TINT : undefined,
        insetBlock: inset,
        insetInline: inset,
      }}
    />
  );
};

export { Plate };
