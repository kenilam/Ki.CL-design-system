import React from 'react';

import { Switch } from 'design/components';
import { useResponsive } from 'design/hooks';

// The docs' stage, so the switch darkens the example and not the site.
import { useStage } from 'design/docs/mdx/preview/stage';

const Preview: React.FC = () => {
  const { theme } = useResponsive();
  const { dark, setDark } = useStage();

  // The stage follows the site until the switch gives it a theme.
  return (
    <Switch checked={dark ?? theme === 'dark'} onCheckedChange={setDark}>
      Dark theme
    </Switch>
  );
};

export { Preview };
