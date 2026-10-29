import React, { useEffect } from 'react';

import { Switch } from 'design/components';
import { useResponsive } from 'design/hooks';

import { useStage } from 'design/docs/mdx/preview/stage';

import type { Props } from 'design/components/switch/docs/controls';

type PreviewProps = Props &
  Pick<React.ComponentProps<typeof Switch>, 'onCheckedChange'>;

const Preview: React.FC<PreviewProps> = ({
  checked,
  onCheckedChange,
  ...props
}) => {
  const { theme } = useResponsive();
  const { dark, setDark } = useStage();

  useEffect(() => {
    if (checked !== undefined) {
      setDark(checked);
    }
  }, [checked, setDark]);

  return (
    <Switch
      {...props}
      checked={dark ?? theme === 'dark'}
      onCheckedChange={(next) => {
        setDark(next);
        onCheckedChange?.(next);
      }}
    >
      Dark theme
    </Switch>
  );
};

export { Preview };
