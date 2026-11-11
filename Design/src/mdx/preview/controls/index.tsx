import React from 'react';

// Components
import { Layout } from 'design/components';

// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { Control } from './control';

const Controls: React.FunctionComponent = () => {
  const { controls, hasControls } = usePreviewContext();

  if (!hasControls) {
    return null;
  }

  return (
    <Layout alignItems='end' display='flex' gap='normal' wrap='stack'>
      <form>
        {Object.keys(controls).map((name) => {
          return <Control id={name} key={name} />;
        })}
      </form>
    </Layout>
  );
};

export { Controls };
